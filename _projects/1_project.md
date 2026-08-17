---
layout: page
title: Web Application Security Testing
description: Hands-on web security assessment with concrete vulnerability evidence
importance: 1
category: security
---

## Case Study: File Upload Validation Bypass

One documented authorized-lab assessment involved a web application with an upload feature protected by a file-extension filter. The exercise demonstrated how relying on a deny-list of extensions can fail when the server accepts another executable extension.

## Attack surface

- Web application exposed on a non-standard HTTP port
- Internal upload functionality
- Upload validation based on file extensions
- Publicly reachable upload directory

## Assessment flow

1. Performed service discovery with Nmap.
2. Enumerated application content and identified the `/internal` upload functionality.
3. Tested the upload control with a controlled set of file extensions.
4. Observed that the expected `.php` extension was rejected while an alternative executable extension was accepted.
5. Validated the impact in the intentionally vulnerable lab by retrieving the uploaded file and obtaining command execution.
6. Enumerated local privilege boundaries and identified an unsafe SUID-enabled `systemctl` binary.
7. Documented the resulting privilege-escalation path and evidence.

## Security lessons

- **File upload security:** validate content and execution context rather than relying only on a blacklist of extensions.
- **Host privilege boundaries:** review SUID/SGID binaries and service-management permissions after initial access.

## Evidence

The original technical write-up contains screenshots, request/response observations, enumeration output, and the complete lab path from reconnaissance through privilege escalation.

Only intentionally vulnerable labs, CTF environments, or otherwise authorized targets are documented publicly.

## Skills demonstrated

Nmap · content enumeration · Burp Suite · upload validation testing · Linux privilege enumeration · SUID analysis · technical reporting
