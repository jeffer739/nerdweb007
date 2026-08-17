---
layout: page
title: API Security Testing
description: Practical API testing with request analysis, authorization checks, and GraphQL security research
importance: 2
category: security
---

## Case Study Focus: Authorization and Trust-Boundary Testing

This project documents hands-on API security work focused on identifying situations where a server trusts assumptions made by the client. The testing approach covers REST and GraphQL interfaces and emphasizes authorization, request manipulation, and business-rule enforcement.

## Assessment areas

- REST and GraphQL request analysis
- Authentication and session behaviour
- Authorization and access-control testing
- Parameter and variable manipulation
- GraphQL schema and query behaviour
- Error handling and information exposure

## Assessment flow

1. Map the intended request and response flow.
2. Identify object identifiers, user-controlled parameters, roles, and authorization decisions.
3. Replay requests while changing identifiers, parameters, variables, and authentication context.
4. Compare server behaviour against the expected authorization boundary.
5. Record the request, response, affected object or function, impact, and missing security control.
6. Produce a reproducible finding and remediation guidance.

## Evidence

The portfolio's API research is backed by hands-on labs and technical notes, including GraphQL-focused security work. Published examples are restricted to authorized labs, CTFs, and intentionally vulnerable environments.

## Skills demonstrated

Burp Suite · REST API testing · GraphQL testing · authorization testing · session analysis · request manipulation · vulnerability documentation
