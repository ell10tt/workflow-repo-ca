# Workflow CA

This project is a vanilla JavaScript web application updated with development workflow tools to improve code quality and testing.

The assignment demonstrates configuration of linting, formatting, pre-commit hooks, unit tests, and end-to-end tests in a real-world development workflow.

---

# Features

- ESLint configuration for JavaScript linting
- Prettier configuration for consistent code formatting
- Husky + lint-staged pre-commit hooks
- Unit testing with Vitest
- End-to-end testing with Playwright
- Environment variable support for automated login testing

---

# Prerequisites

Make sure the following tools are installed:

- **Node.js** (v20+ recommended)
- **npm**

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Run the project

Tailwind CSS watcher:

```bash
npm run dev
```

---

# Running Tests

Run Vitest in watch mode:

```bash
npm run test
```

Run unit tests once:

```bash
npm run test:unit
```

Run end-to-end tests:

```bash
npm run test:e2e
```

---

# Code Quality Tools

Run ESLint:

```bash
npm run lint
```

Format files with Prettier:

```bash
npm run format
```

Pre-commit hooks automatically run using **Husky + lint-staged** to:

- format HTML files
- format JavaScript files
- lint JavaScript files

---

# Environment Variables

Create a `.env` file in the root directory:

```env
TEST_EMAIL=your-test-email
TEST_PASSWORD=your-test-password
```

A `.env.example` file is included in the project.

---

# Available Scripts

| Script | Description |
|------|-------------|
| npm run dev | Run Tailwind CSS watcher |
| npm run lint | Run ESLint |
| npm run format | Format files with Prettier |
| npm run test | Run Vitest in watch mode |
| npm run test:unit | Run Vitest unit tests once |
| npm run test:e2e | Run Playwright end-to-end tests |

---

# Technologies Used

- JavaScript (Vanilla)
- HTML
- CSS
- Tailwind CSS
- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright

---

# Notes

- `.env` is ignored via `.gitignore`
- `.env.example` provides required environment variable names
- Pre-commit hooks ensure code formatting and linting before commits
- Unit tests verify application utility functions
- End-to-end tests verify login and navigation functionality

---

# Author

ell10tt 

---

# AI Usage Log

## Entry 1
Tool used: ChatGPT  
Date: 10 March 2026  

Purpose:  
Explanation of assignment requirements including ESLint, Prettier, Husky, lint-staged, Vitest, and Playwright.

Outcome:  
Improved understanding of development workflow configuration and testing setup.

---

## Entry 2
Tool used: ChatGPT  
Date: 10 March 2026  

Purpose:  
Drafting README documentation and AI usage log.

Outcome:  
Documentation reviewed and edited before inclusion in the repository.