---
layout: post
title: "RouterSpace: Mobile API Command Injection and Host Privilege Escalation"
date: 2026-08-17
description: An authorized Hack The Box assessment covering APK analysis, API request interception, command injection, SSH access, and privilege escalation.
tags: [penetration-testing, mobile-security, api-security, command-injection, privilege-escalation, ctf]
categories: writeups
---

## Overview

This case study documents an authorized Hack The Box RouterSpace machine assessment. The interesting part of the exercise was the transition from a mobile application to its backend API: the APK exposed an endpoint that could be intercepted and tested through Burp Suite, leading to command injection and subsequent host compromise.

## Scope and methodology

The target was an authorized Hack The Box lab. The assessment followed this sequence:

1. Service discovery
2. Mobile application acquisition and inspection
3. API traffic interception
4. Input-validation testing
5. Command-execution validation
6. SSH access through a writable authentication path
7. Local privilege enumeration
8. Vulnerability validation and reporting

## 1. Mobile application and API discovery

Nmap identified the exposed services. The HTTP service provided access to a downloadable Android APK, which was installed and inspected in a controlled environment.

Traffic from the application was routed through Burp Suite so that API requests could be observed and manipulated. A status-check request became the primary input-validation test case.

## 2. Command injection

Controlled input testing demonstrated that the API did not safely constrain the command-related parameter. The application passed attacker-controlled input into a command execution context.

### Security impact

OS command injection can allow an attacker to execute arbitrary commands with the privileges of the vulnerable application process. In this lab, that behaviour provided a route from the mobile-facing API to host-level access.

## 3. SSH access

Post-exploitation enumeration identified a writable SSH-related path. The lab configuration allowed a public key to be placed into the appropriate authentication location, providing stable SSH access for continued assessment.

This step demonstrates why post-exploitation review should include filesystem permissions and authentication material, not just automated vulnerability output.

## 4. Privilege escalation

Local enumeration identified a vulnerable `sudo` version associated with CVE-2021-3156. The lab environment was then used to validate the known privilege-escalation path and confirm elevated access.

## Findings

### Finding 1 — OS command injection in API functionality

**Impact:** command execution under the application context and a path to host compromise in the lab.

**Recommended controls:**

- Avoid constructing shell commands from user-controlled input.
- Use safe APIs with argument arrays rather than shell interpretation.
- Apply strict server-side input validation.
- Run application services with least privilege.
- Add security regression tests for command-injection payload classes.

### Finding 2 — Weak SSH file-permission boundary

**Impact:** unauthorized persistence/access within the vulnerable lab configuration.

**Recommended controls:**

- Protect SSH configuration and key files with restrictive ownership and permissions.
- Prevent application processes from writing to user authentication directories.
- Monitor unexpected changes to `authorized_keys`.

### Finding 3 — Vulnerable privileged software

**Impact:** local privilege escalation in the lab environment.

**Recommended controls:**

- Patch vulnerable operating-system packages promptly.
- Minimize privileged software and `sudo` permissions.
- Monitor exploitation attempts against known local privilege-escalation vulnerabilities.

## What this exercise demonstrates

Mobile application testing is often inseparable from API testing. The client may reveal request formats and endpoints, but the security boundary ultimately sits on the server. Testing should therefore focus on what the backend trusts, how input reaches sensitive operations, and what privileges remain available after initial access.

## Tools and references

Nmap · Burp Suite · Android tooling/ADB · SSH · Linux enumeration tools

The assessment was performed against the authorized Hack The Box RouterSpace machine.

Only authorized targets should be tested.
