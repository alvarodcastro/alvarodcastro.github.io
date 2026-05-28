---
title: "Automotive ECU Security Assessment Framework"
summary: "A structured methodology and toolset for security assessment of diagnostic communication and UDS services in automotive ECUs. The framework identifies attack surfaces in session management, security access, and routine control services, and produces risk-ranked findings suitable for OEM review and responsible disclosure."
startDate: 2024-01-01
status: "active"
role: "Lead Researcher"
technologies:
  - Python
  - CAN
  - UDS / ISO 14229
  - Linux
  - Scapy
  - Reverse Engineering
links:
  github: "https://github.com/alvarodc/ecu-assessment"
tags:
  - automotive security
  - embedded systems
  - UDS
  - responsible disclosure
featured: true
---

## Research Objective

Develop a reusable, systematic approach to security assessment of production ECUs, focusing on the UDS diagnostic protocol (ISO 14229) and adjacent interfaces.

## Methodology

The assessment follows a structured attack surface decomposition — from physical CAN access to session-layer protocol analysis, security access bypass analysis, and memory services. All testing is conducted in controlled lab environments on hardware acquired lawfully.

## Defensive Value

The framework enables OEMs and Tier-1 suppliers to identify and prioritise diagnostic interface vulnerabilities before production release, reducing the risk of in-field exploitation.

## Results

Identified multiple security architecture weaknesses in diagnostic session handling. Findings communicated through responsible disclosure channels.
