# SinhalaLearn Research Website

Research website for **SinhalaLearn: AI-Powered Assistant for Sinhala Resources**, an IT4010 research project at SLIIT.

Live site: [https://research.sinhalalearn.online](https://research.sinhalalearn.online)

## Overview

SinhalaLearn explores an AI-powered learning assistant for Sinhala educational resources. The research focuses on Sinhala document processing, resource-based question answering, voice interaction, and explainable answer evaluation for Sinhala-medium learning contexts.

The website presents the project domain, milestones, documents, presentations, team members, supervisors, and contact information.

## Main Sections

- Home
- Research Domain
- Milestones
- Documents
- Presentations
- Team
- Contact

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Icons
- EmailJS
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root for the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

The project is configured to build with Vite and publish the `dist` directory to GitHub Pages.

Manual deployment:

```bash
npm run deploy
```

Automatic deployment is configured in `.github/workflows/deploy.yml` and runs on pushes to the `main` branch.

## Project Structure

```text
src/
  components/        Reusable page sections and UI components
  data/              Team, supervisor, milestone, and document data
  hooks/             Custom React hooks
  types/             Shared TypeScript types
public/
  docs/              Public research documents
  images/            Team and website images
```

## Contact

Email: miyurilokuhewage15@gmail.com
