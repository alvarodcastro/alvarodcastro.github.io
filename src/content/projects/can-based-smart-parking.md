---
title: "CAN-Based Smart Parking Cyber-Physical System"
summary: "A research testbed that connects physical parking sensors and actuators over CAN to a host-side intrusion-detection system. It supports reproducible denial-of-service, spoofing, replay, fuzzing, sensor-injection, and adversarial-vision experiments across the system's physical, network, and perception layers."
startDate: 2026-01-17
endDate: 2026-01-20
status: "completed"
role: "Lead Researcher and Developer"
technologies:
  - Python
  - C
  - C++
  - CAN bus
  - PIC32MZ
  - Arduino
  - MQTT
  - SQLite
  - python-can
links:
  github: "https://github.com/alvarodcastro/CAN-based-Smart-Parking"
  paper: "https://doi.org/10.1145/3806008.3811701"
tags:
  - cyber-physical systems
  - CAN intrusion detection
  - smart parking
  - adversarial machine learning
  - attack modelling
featured: true
---

## Research Goal

This project studies security as an end-to-end property of a smart-parking cyber-physical system. A parking installation can fail because its field bus is manipulated, because sensor values are falsified, or because its camera-based recognition pipeline is deceived. The testbed brings these attack surfaces into one reproducible environment so that attacks and detection strategies can be evaluated together.

## System Architecture

Arduino-compatible sensor and actuator nodes represent parking-space occupancy, ambient conditions, and the entry barrier. These nodes communicate over a CAN network. A PIC32MZ device bridges the embedded network to a host responsible for traffic collection, analysis, and alerting.

The host-side `CANNetworkIDS` records frames in SQLite and first observes normal traffic to establish a baseline. Detection then combines several signals: previously unseen arbitration identifiers, changes in message frequency, payload values outside the expected sensor range, and payload-pattern deviation. Detected events are written to an intrusion log and can also be published as MQTT alerts.

This design intentionally keeps the detector understandable. Each alert can be connected to a concrete rule and physical expectation, making the platform useful for experiments where explainability matters as much as detection rate.

## Attack and Evaluation Tooling

The CAN attack utility uses `python-can` and provides four controlled workloads:

- flooding at a configurable frame rate to evaluate availability controls;
- fuzzing across chosen CAN identifiers, payload lengths, and generation modes;
- periodic spoofing of a selected identifier and payload;
- replay of captured traffic while optionally preserving original timing.

Every transmitted frame can be logged with its attack label, allowing IDS observations to be compared with the injected ground truth. Additional scenarios model sensor-data injection and command spoofing at the CPS layer.

The project also connects the network testbed with adversarial ANPR experiments. This extends the threat model beyond the CAN bus: a manipulated image can influence access-control decisions before any corresponding command reaches the embedded network.

## Research Outcome

The repository packages the embedded firmware, gateway code, IDS, attack generators, system diagrams, and integration tests needed to reproduce the environment. The work accompanies the publication *Attack Modelling and Intrusion Detection in a CAN-Based Smart Parking Cyber-Physical System*.

## Safe Use

Attack tooling is intended for isolated laboratory networks and authorized hardware. Frame injection and high-rate traffic must not be directed at production vehicles, public infrastructure, or safety-critical systems.
