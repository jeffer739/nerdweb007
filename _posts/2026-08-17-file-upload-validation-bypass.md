---
layout: post
title: "File Upload Validation Bypass: From Reconnaissance to Privilege Escalation"
date: 2026-08-17
description: A structured walkthrough of an authorized Vulnversity lab assessment, focusing on upload validation, evidence collection, and post-compromise privilege enumeration.
tags: [penetration-testing, web-security, file-upload, privilege-escalation, ctf]
categories: [writeups]
featured: true
---

## Overview

This case study documents an authorized TryHackMe Vulnversity lab assessment. The objective was to move from service discovery to controlled validation of a web application weakness, then examine the local privilege boundary after initial access.

The exercise is useful because it demonstrates a common assessment pattern: a security control that appears to block a dangerous input may still be bypassable when the application relies on an incomplete deny-list.

## Scope and methodology

The target was an intentionally vulnerable CTF/lab environment. The assessment followed this sequence:

1. Service discovery
2. Web content enumeration
3. Upload-functionality discovery
4. Controlled upload validation testing
5. Impact validation
6. Local privilege enumeration
7. Evidence collection and reporting

## 1. Reconnaissance

Nmap was used for initial service discovery. An HTTP service was identified on a non-standard port, after which directory enumeration was used to discover application functionality that was not immediately visible from the main page.

The `/internal` area exposed an upload feature. At this point the assessment shifted from broad reconnaissance to focused input-validation testing.

## 2. Upload validation testing

The upload control rejected a normal `.php` extension. Rather than assuming the control was secure, I tested a controlled list of alternative extensions to determine whether the application was implementing a deny-list rather than a robust allow-list and execution policy.

An alternative executable extension was accepted. In the intentionally vulnerable lab, this allowed the uploaded test payload to be processed by the server and provided command execution.

### Security impact

A file-upload control that validates only the filename extension can create a path from an attacker-controlled file to server-side execution. The impact can include remote code execution and full application compromise depending on the execution context and server configuration.

## 3. Post-compromise enumeration

After obtaining the lab shell, the next step was not immediately to assume root access. I enumerated local privilege boundaries and reviewed SUID/SGID-enabled binaries.

A SUID-enabled `systemctl` binary stood out as an unsafe privilege boundary in the lab environment. Using the documented lab technique, the service-management capability was abused to execute a command with elevated privileges.

The result confirmed execution in the root context within the lab.

## Findings

### Finding 1 — Weak file-upload validation

**Root cause:** reliance on extension filtering without sufficiently restricting executable content and execution context.

**Impact:** attacker-controlled server-side execution in the vulnerable lab.

**Recommended controls:**

- Use a strict allow-list of expected file types.
- Validate file content rather than trusting the extension.
- Store uploads outside executable web roots.
- Disable script execution in upload directories.
- Generate server-side filenames and ignore user-supplied extensions where practical.
- Enforce least privilege for the service account.

### Finding 2 — Unsafe privileged service-management boundary

**Root cause:** a privileged SUID binary exposed functionality that could be abused by the low-privileged account in the lab.

**Impact:** local privilege escalation to root in the vulnerable environment.

**Recommended controls:**

- Remove unnecessary SUID permissions.
- Review privileged binaries regularly.
- Apply least privilege to service-management operations.
- Monitor unexpected privileged process execution.

## What this exercise demonstrates

The most important lesson is that penetration testing is a chain of questions rather than a collection of tools:

> What is exposed? What assumptions does the application make? Can those assumptions be changed? What is the impact? What control should have prevented it?

That reasoning is more valuable than simply identifying a known payload or command.

## Tools

Nmap · Dirsearch · Burp Suite · Linux command-line utilities

## Lab and references

This write-up is based on an intentionally vulnerable TryHackMe Vulnversity environment and is published for educational purposes.

- TryHackMe Vulnversity
- GTFOBins — systemctl

Only authorized labs, CTF environments, and systems for which testing permission exists should be assessed.
