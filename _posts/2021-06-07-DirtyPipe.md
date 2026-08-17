---
layout: post
title: "Dirty Pipe (CVE-2022-0847): Vulnerability Analysis and Exploitation Research"
date: 2026-08-17
description: A technical study of Dirty Pipe, its page-cache write primitive, exploitation constraints, and defensive implications.
tags: [vulnerability-research, linux, cve, dirty-pipe, privilege-escalation]
categories: research
---

## Overview

Dirty Pipe (CVE-2022-0847) is a Linux kernel vulnerability involving uninitialized `pipe_buffer` flags that can enable modification of data in the page cache under specific conditions.

This article presents the vulnerability as a research exercise rather than simply a copy-and-paste exploit. The focus is on understanding the primitive, its constraints, the security impact, and the conditions defenders should care about.

## Affected security boundary

The interesting property of Dirty Pipe is that the vulnerable write primitive can operate against file contents that the current process cannot normally modify. The underlying mechanism involves page-cache references created through the pipe subsystem.

The exploitation model has important constraints. In particular, the write offset cannot begin on a page boundary and the write cannot cross a page boundary. The target data must also already exist because the primitive does not create a new file.

## Exploitation concept

The research PoC follows a high-level sequence:

1. Prepare a pipe whose buffers have the mergeable flag state.
2. Drain the pipe while retaining the relevant buffer metadata.
3. Splice a byte from the target file into the pipe immediately before the desired overwrite position.
4. Write controlled data into the pipe.
5. Observe that the page-cache-backed buffer can be modified despite the normal file write restrictions.

This primitive can then be combined with an appropriate privilege boundary in a vulnerable system.

## Security impact

On affected Linux systems, successful exploitation can allow a local unprivileged process to modify the contents of otherwise protected files. Depending on the chosen target and system configuration, this can become a direct route to privilege escalation.

## Defensive considerations

The most important remediation is to run a patched kernel version that addresses CVE-2022-0847.

Additional defensive measures include:

- Maintain a current kernel patching process.
- Monitor for unexpected modifications to protected files.
- Restrict local-user access where practical.
- Use endpoint detection capable of identifying suspicious privilege-escalation behaviour.
- Treat public proof-of-concept code as a detection and validation resource, not as a substitute for patch management.

## Research notes

The original lab work examined multiple exploitation paths, including modification of authentication-related files and abuse of privileged binaries. Those experiments are useful for understanding how a low-level kernel primitive can cross an operating-system security boundary.

For a professional security report, however, the key result is the vulnerability condition, reproducible impact, affected versions, remediation, and evidence—not merely obtaining a root shell.

## References

- CVE-2022-0847 / Dirty Pipe research
- Dirty Pipe technical analysis by the vulnerability researchers
- Linux kernel security advisories

This material is for authorized research and lab environments only.
