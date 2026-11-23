---
title: "Adversarial Robustness of ANPR Systems"
summary: "An experimental evaluation of how localized image perturbations affect an automatic number plate recognition pipeline built from YOLO and PaddleOCR. The work measures attacks against both plate localization and character recognition and accompanies a published technical report."
startDate: 2025-12-13
endDate: 2026-04-23
status: "completed"
role: "Researcher and Developer"
technologies:
  - Python
  - Jupyter
  - YOLO
  - PaddleOCR
  - PyTorch
  - OpenCV
  - NumPy
links:
  github: "https://github.com/alvarodcastro/AdversarialANPR"
  paper: "https://doi.org/10.5281/zenodo.18302845"
tags:
  - adversarial machine learning
  - computer vision
  - ANPR
  - model robustness
  - cyber-physical systems
featured: true
---

## Research Question

Automatic number plate recognition is a two-stage decision pipeline: an object detector must first locate a plate, and an OCR model must then convert the crop into an identity. This project asks how small or localized image-space changes can disrupt either stage and how those failures should be measured.

The experiments use Spanish license-plate images, a YOLO-based detector, and PaddleOCR. A baseline pass records whether a plate is found, its detection confidence, and the recognized text before the same samples are exposed to three different perturbation strategies.

## Experimental Pipeline

The research notebook organizes the work into data acquisition, model initialization, baseline measurement, attack execution, and reporting. Plate detections are converted into regions of interest for OCR, and text candidates are normalized before comparison. Generated figures preserve the original, perturbed, and difference views so that numerical changes can be considered alongside visual quality.

GPU execution is optional. Reproducibility depends on fixing random seeds, retaining the same detector weights, and using a stable image sample because two of the searches contain randomized directions or noise.

## Attack Models

### Detection denial

Bounded pixel noise is applied globally or within the detected plate region. The experiment sweeps several perturbation magnitudes and treats a missing detection or a confidence value below the chosen threshold as a successful denial. Results report attack success and confidence reduction for each magnitude.

### Targeted region transfer

A target plate region is resized and blended into the source plate area under a bounded per-pixel change. Edge smoothing reduces obvious seams. The modified image is evaluated again, including the overlap between the resulting detection and the intended target region.

### OCR manipulation

The OCR experiment restricts changes to an edge-weighted mask concentrated around character strokes and plate boundaries. A gradient-free directional search evaluates positive and negative candidate updates, selects changes that reduce recognition stability, and stops when the recognized text differs from the baseline or the search budget is exhausted.

## Evaluation and Interpretation

The project separates detector-level and recognizer-level outcomes. Metrics include detection success, confidence loss, attack success by perturbation budget, bounding-box overlap, OCR text changes, and OCR confidence. This distinction is important: an access-control system can fail closed because no plate is detected, or make a more subtle identity error after a visually plausible plate crop reaches OCR.

The work is an experimental robustness study, not a claim that every perturbation is physically realizable. Lighting, viewing angle, printing, camera processing, and distance would need to be included to evaluate attacks in the physical world.

## Responsible Use

The code and report support defensive research into safer vision-based systems. License-plate imagery is sensitive data, and experiments should follow dataset terms, privacy requirements, and institutional ethics guidance.
