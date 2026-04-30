# Control Centre

A lightweight front door for the Van Finance business suite.

Control Centre is intentionally navigation-only. It does not connect to Supabase, OneDrive, stock sync, posting flows, CRM business logic, or any other app internals.

## Local setup

```bash
npm install
npm run dev
```

## Environment variables

```text
VITE_MAIN_CRM_URL=https://crm-roan-rho.vercel.app
VITE_MARKETING_CRM_URL=https://marketing-crm-six.vercel.app
VITE_WORK_DOCUMENTS_HUB_URL=https://work-documents-hub.vercel.app
VITE_IMAGE_SUITE_URL=https://vehicle-image-suite.vercel.app
VITE_CONTROL_CENTRE_URL=https://control-centre-navy.vercel.app
```

If a URL is blank, the matching shortcut card is shown as Coming soon.

## Validation

```bash
npm run lint
npm run build
```
