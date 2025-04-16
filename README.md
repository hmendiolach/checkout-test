<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

<h1 align="center">NestJS + Stripe Checkout Backend</h1>

<p align="center">
  Proyecto demostrativo de backend utilizando <strong>NestJS</strong>, autenticación con JWT, integración con Stripe Checkout, Prisma ORM y buenas prácticas de seguridad.
</p>

<p align="center">
  <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/Node.js-18.x-green.svg" alt="Node.js Version" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://github.com/HiramMendiola/stripe-demo/actions" target="_blank"><img src="https://github.com/HiramMendiola/stripe-demo/actions/workflows/deploy.yml/badge.svg" alt="CI/CD" /></a>
</p>

---

## 🚀 Tecnologías utilizadas

- **NestJS** – Framework modular para aplicaciones Node.js
- **Stripe API** – Pasarela de pagos segura
- **JWT** – Autenticación con tokens
- **Prisma** – ORM para PostgreSQL
- **PostgreSQL** – Base de datos relacional
- **Jest** – Framework de testing
- **GitHub Actions** – CI/CD automatizado
- **dotenv** – Configuración de variables de entorno
- **bcrypt** – Hash de contraseñas
- **Helmet + Throttler** – Seguridad HTTP y protección contra abusos

---

## 📦 Instalación

```bash
git clone https://github.com/HiramMendiola/stripe-demo.git
cd stripe-demo
npm install
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/stripe_demo"
JWT_SECRET=""
STRIPE_SECRET_KEY=""
FRONTEND_URL="http://localhost:3000"
```

---

## ✅ Correr tests

```bash
npm run test
```

---

## 🔐 Buenas prácticas de seguridad

- Contraseñas hasheadas con `bcrypt`
- Middleware de seguridad `helmet` activado
- Rate limiting con `@nestjs/throttler`
- Validación estricta con `class-validator`
- Evitar CSRF usando JWT en `Authorization` header
- Sanitización de entrada en DTOs
- CORS configurado por origen

---

## 🔄 CI/CD con GitHub Actions

Archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to EC2

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to EC2
        uses: appleboy/scp-action@v0.1.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ubuntu
          key: ${{ secrets.EC2_SSH_KEY }}
          source: "dist/"
          target: "/home/ubuntu/stripe-demo"
```

---

## 👤 Autor

Desarrollado por **Hiram Mendiola**.  
Contacto: [github.com/HiramMendiola](https://github.com/HiramMendiola)

---
