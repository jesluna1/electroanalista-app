# ElectroAnalista App - Despliegue en Vercel (Guía paso a paso)

Esta guía te ayudará a desplegar tu app ElectroAnalista, construida con React + Vite, directamente en Vercel, incluso si no tienes experiencia previa.

---

## ✅ Requisitos previos

- Cuenta gratuita en [https://vercel.com](https://vercel.com)
- Cuenta en GitHub (para subir tu código)
- Tu clave de API de OpenAI (empieza con `sk-...`)

---

## 🧩 Paso 1: Subir tu proyecto a GitHub

1. Entra a [https://github.com](https://github.com) y crea un repositorio nuevo (puede llamarse `electroanalista-app`).
2. Descomprime este archivo ZIP en tu computadora.
3. Abre una terminal (CMD o Git Bash) y navega hasta esa carpeta:
   ```bash
   cd electroanalista-app
   git init
   git add .
   git commit -m "Proyecto ElectroAnalista inicial"
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin master
   ```

---

## 🚀 Paso 2: Crear el proyecto en Vercel

1. Entra a [https://vercel.com](https://vercel.com) y haz clic en **New Project**.
2. Conecta tu cuenta de GitHub y selecciona el repositorio que acabas de subir.
3. Cuando aparezcan las opciones de configuración:

| Campo            | Valor               |
|------------------|---------------------|
| Framework        | Vite (React)        |
| Build Command    | `npm run build`     |
| Output Directory | `dist`              |

4. Haz clic en **Environment Variables** y agrega:

```
Nombre: VITE_OPENAI_API_KEY
Valor: tu clave secreta de OpenAI (sk-...)
```

5. Haz clic en **Deploy**.

---

## 🌐 Paso 3: Usar tu app

Una vez desplegada, Vercel te dará una URL como:

```
https://electroanalista.vercel.app
```

Puedes compartirla o agregarla como acceso directo a tu celular si activas soporte PWA más adelante.

---

## 💡 Consejos

- Siempre guarda tu `.env` local sin subirlo a GitHub.
- Puedes editar `ElectroAnalistaApp.jsx` para cambiar estilos o mejorar la interfaz.
- Agrega funciones como historial o carga de archivos con ayuda de un backend si lo necesitas.

---

¡Listo! Tu app está en línea y funcionando con GPT-4 para ayudarte a diagnosticar fallas técnicas como un profesional ⚡