```markdown
# Portfolio Website

A modern developer portfolio built with **React + TypeScript + Vite**, styled with **Tailwind CSS**, animated with **Framer Motion**, and integrated with **EmailJS** for contact form submissions (no backend required).

## Features

- Multi-page portfolio with routing:
  - Home
  - About
  - Projects
  - Contact
- Responsive UI and modern dark theme
- Animated interactions using Framer Motion
- Contact form with:
  - EmailJS integration
  - Loading state on submit
  - Inline toast feedback (success/error)
- Resume download support
- Reusable components (Navbar, Footer, etc.)

## Tech Stack

- **React 18**
- **TypeScript 5**
- **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion**
- **React Router DOM**
- **Lucide React**
- **EmailJS Browser SDK**

## Project Structure
```
text
my-portfolio-website/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── constants.ts
│   ├── index.css
│   ├── index.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
## Getting Started

### 1) Install dependencies
```
bash
npm install
```
### 2) Run development server
```
bash
npm run dev
```
### 3) Build for production
```
bash
npm run build
```
### 4) Preview production build
```
bash
npm run preview
```
## Environment Variables

Create a `.env` file in the project root:
```
env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
> Note: In Vite, client-side environment variables must start with `VITE_`.

## EmailJS Setup (No Backend)

1. Create an EmailJS account.
2. Add an email service (Gmail/Outlook/etc.).
3. Create your templates (Contact/Auto-Reply as needed).
4. Copy Service ID, Template ID, and Public Key into `.env`.
5. Ensure template variables match your form payload (e.g. `from_name`, `from_email`, `subject`, `message`).

## Scripts
```
bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build locally
npm run lint     # Run ESLint
```
## Deployment

This app can be deployed on platforms like:

- Vercel
- Netlify
- GitHub Pages (with Vite-compatible setup)

Make sure deployment environment variables are also configured.

## License

This project is for personal portfolio use.  
You can adapt it for your own portfolio.
```
