---
title: "CANSim Lab"
summary: "A containerized automotive cybersecurity research environment that combines realistic, multi-ECU CAN traffic with a live vehicle dashboard. It provides a reproducible lab for learning CAN communications, testing frame injection and replay attacks, and evaluating intrusion-detection approaches without interacting with a real vehicle."
startDate: 2026-05-14
status: "completed"
role: "Creator and Maintainer"
technologies:
  - Python
  - SocketCAN
  - python-can
  - Flask
  - WebSocket
  - Docker
  - can-utils
links:
  github: "https://github.com/alvarodcastro/CANSim-Lab"
tags:
  - automotive security
  - CAN bus
  - cyber-physical systems
  - security training
  - intrusion detection
featured: true
---

## Project Objective

CANSim Lab provides a safe, repeatable environment for automotive cybersecurity research and training. It emulates vehicle systems over a virtual CAN interface so that traffic analysis, attack simulation, and defensive experiments can be performed without access to physical ECUs or a production vehicle.

## Architecture

The lab uses a Python-based simulator to model multiple ECUs and publish realistic signals through SocketCAN. A Flask and WebSocket application decodes the CAN traffic and presents it through an interactive vehicle dashboard. Both services are containerized with Docker Compose and connect to the host's `vcan0` interface.

Simulated systems include the engine control module, anti-lock braking system, body control module, transmission, tire-pressure monitoring, HVAC, instrument cluster, airbag system, and gateway.

## Implementation

The ECU simulator separates CAN identifiers and signal encoders from the runtime vehicle model. It periodically derives values such as engine speed, road speed, throttle, wheel speed, temperatures, fuel level, tire pressure, gear, and body state, then emits the corresponding eight-byte frames. A reserved control-ID range lets the dashboard request actions such as starting the engine, changing throttle or gear, operating doors and lights, adjusting HVAC, locking the vehicle, and updating seatbelt state.

The dashboard backend runs a CAN receive loop, decodes known frames, and publishes state changes to the browser over WebSocket. User actions take the reverse path through REST endpoints and are encoded as control frames on the same virtual bus. This bidirectional design makes the interface useful for observing both normal telemetry and the immediate physical interpretation of injected traffic.

Docker Compose builds the simulator and dashboard consistently, but both containers share the host network because SocketCAN's virtual interface belongs to the Linux kernel. The host setup script creates `vcan0`; `can-utils` can then observe, record, generate, or replay traffic independently of the application.

## Security Applications

The environment supports controlled experiments with CAN frame monitoring, injection, spoofing, replay, and fuzzing. Its documented signal and control-frame maps also make it suitable for generating baseline traffic, introducing anomalies, and evaluating CAN intrusion-detection techniques.

Example exercises include forcing a body-control signal, reporting an impossible speed while the engine is idle, replaying a recorded session, or generating randomized traffic for a selected arbitration identifier. Because the dashboard translates frames into visible state, students can connect a low-level byte change to its system-level consequence.

## Extensibility and Limits

New ECUs require three coordinated changes: a signal definition and encoder, a simulator transmission loop, and a matching dashboard decoder and visualization. The same architecture can be extended with OBD-II responses, CAN FD, or a physical `can0` interface.

The current model is intentionally educational. Its signals and control frames are documented rather than reverse-engineered from a production vehicle, timing is simplified, and the virtual bus does not reproduce every electrical or arbitration effect of real hardware. Those properties make experiments reproducible, but results should not be treated as validation against a particular vehicle platform.

## Safety

CANSim Lab is intended exclusively for research and education on isolated, virtual networks. Testing against real vehicles or networks should only be performed with explicit authorization.
