---
layout: post
title: "Vulnversity: File Upload Validation Bypass and Privilege Escalation"
date: 2026-08-17
description: A structured authorized-lab assessment covering reconnaissance, upload validation, command execution, and Linux privilege enumeration.
tags: [penetration-testing, web-security, file-upload, privilege-escalation, ctf]
categories: writeups
featured: true
---

## Overview

This write-up documents an authorized TryHackMe Vulnversity lab assessment. The objective was to move from service discovery to controlled validation of a web application weakness, then examine the local privilege boundary after initial access.

The exercise demonstrates an important assessment principle: a security control that blocks one dangerous input does not necessarily mean the underlying functionality is secure.

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

Initial service discovery identified an HTTP service running on a non-standard port. Directory enumeration then revealed an `/internal` area containing an upload feature and an `/uploads` location.

The important transition here was from broad reconnaissance to focused testing of a security-sensitive input: file upload handling.

## 2. Testing the upload control

The application rejected a normal `.php` extension. Instead of treating that response as proof that the upload control was secure, I tested a controlled set of alternative extensions to understand how the validation rule was implemented.

An alternative executable extension was accepted. In the intentionally vulnerable lab environment, the uploaded test payload could then be processed by the server, providing command execution.

### Security impact

A file-upload mechanism that relies primarily on filename extension filtering can create a path from attacker-controlled content to server-side execution. Depending on the execution context, this can lead to remote code execution and compromise of the application host.

## 3. Post-compromise enumeration

After obtaining the lab shell as `www-data`, I enumerated the local privilege boundary rather than assuming that initial access was the end of the assessment.

The SUID/SGID inventory contained an unusual privileged `systemctl` binary. In the vulnerable lab configuration, this provided a path to execute commands with elevated privileges.

The lab validation confirmed execution in the root context.

## Findings

### Finding 1 — Weak file-upload validation

**Root cause:** the application relied on an incomplete extension filter instead of combining strict file-type validation with a non-executable storage and serving model.

**Impact:** server-side command execution in the vulnerable lab environment.

**Recommended controls:**

- Use a strict allow-list of expected file types.
- Validate file content rather than trusting the filename extension.
- Store uploaded files outside executable web roots where possible.
- Disable script execution in upload directories.
- Generate server-side filenames and avoid trusting user-controlled extensions.
- Apply least privilege to the service account.

### Finding 2 — Unsafe privileged service-management boundary

**Root cause:** a privileged SUID-enabled service-management binary was available to the low-privileged account in the lab.

**Impact:** local privilege escalation to root in the vulnerable environment.

**Recommended controls:**

- Remove unnecessary SUID permissions.
- Review privileged binaries regularly.
- Apply least privilege to service-management operations.
- Monitor unexpected privileged process execution.

## Evidence

The original assessment included Nmap output, directory enumeration, upload-validation testing, request manipulation, shell access, and SUID enumeration screenshots. The evidence demonstrates the progression from exposed service to validated impact.

## Key lesson

The value of penetration testing is not simply finding a payload that works. The useful questions are:

- What is exposed?
- What security assumption is being made?
- Can that assumption be changed?
- What is the resulting impact?
- What control should have prevented it?

## Tools

Nmap · directory enumeration · Burp Suite · Linux command-line utilities

## Lab and references

This assessment was performed against an intentionally vulnerable TryHackMe Vulnversity environment for educational purposes.

- TryHackMe — Vulnversity
- GTFOBins — systemctl

Only authorized labs, CTF environments, or systems for which explicit testing permission exists should be assessed.
