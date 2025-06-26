
# Meet AI Platform 🚀

Next-generation video conferencing powered by AI: smarter, more productive, and effortlessly organized.

---

## 🌟 Features

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/Lostovayne/meet-ai-platform?utm_source=oss&utm_medium=github&utm_campaign=Lostovayne%2Fmeet-ai-platform&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

| Core Functionality         | AI Capabilities           |
|---------------------------|---------------------------|
| AI-Powered Video Calls    | Custom Real-time Agents   |
| Smart Meeting Summaries   | AI Q&A                    |
| Meeting Recordings        | OpenAI Integration        |
| Transcript Search         | Smart Transcripts         |

---

## 🛠️ Technical Stack

| Layer         | Technology                                    |
| ------------- | --------------------------------------------- |
| Frontend      | Next.js 15, React 19, Tailwind CSS v4         |
| UI Components | shadcn/ui                                     |
| Auth          | Better Auth                                   |
| Real-time     | Stream Video SDK, Stream Chat SDK             |
| Background    | Inngest (background jobs)                     |
| Payments      | Polar subscriptions                           |
| DB/ORM        | Drizzle ORM                                   |
| Package Mgmt  | Bun, npm, or yarn                             |
| Deploy        | AWS Amplify                                   |

---

## 📐 Architecture Overview

```mermaid
flowchart TD
    User[User] -->|Sign In/Up| NextJS[Next.js App]
    NextJS -->|API Call| AuthAPI[Better Auth API]
    NextJS -->|Video| StreamSDK[Stream Video/Chat SDK]
    NextJS -->|AI| OpenAI[OpenAI API]
    NextJS -->|Payments| Polar[Polar API]
    NextJS -->|Background| Inngest[Inngest Jobs]
    NextJS -->|DB| Drizzle[Drizzle ORM]
```

---

## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant FE as Next.js Frontend
    participant BA as Better Auth API
    participant DB as Database

    U->>FE: Submit credentials (Sign In/Up)
    FE->>BA: POST /api/auth
    BA->>DB: Validate or create user
    DB-->>BA: User data / Auth token
    BA-->>FE: Auth token (JWT/session)
    FE-->>U: Set session, redirect to dashboard
```

---

## 📦 Endpoints principales (API)

| Endpoint                        | Método | Descripción                        |
|---------------------------------|--------|------------------------------------|
| `/api/auth/sign-in`             | POST   | Login de usuario                   |
| `/api/auth/sign-up`             | POST   | Registro de usuario                |
| `/api/meetings`                 | GET    | Listar reuniones                   |
| `/api/meetings`                 | POST   | Crear nueva reunión                |
| `/api/meetings/:id`             | GET    | Obtener detalles de reunión        |
| `/api/meetings/:id/summary`     | GET    | Obtener resumen AI de la reunión   |
| `/api/meetings/:id/recording`   | GET    | Descargar grabación                |
| `/api/payments/subscribe`       | POST   | Suscribirse vía Polar              |

---

## ⚙️ Variables de entorno

Configura tus variables en `.env.local`:

| Variable              | Descripción                                 |
|-----------------------|---------------------------------------------|
| `STREAM_API_KEY`      | Credencial de Stream Video/Chat             |
| `STREAM_API_SECRET`   | Secreto de Stream Video/Chat                |
| `OPENAI_API_KEY`      | Clave de OpenAI                            |
| `BETTER_AUTH_SECRET`  | Secreto para Better Auth                    |
| `POLAR_API`           | Clave para pagos con Polar                  |
| ...                   | Ver `.env.example` para más detalles        |

---

## 🚀 Getting Started

### Prerequisitos
- Node.js 18+
- Bun (opcional, recomendado)
- npm o yarn
- Credenciales de Stream
- API Key de OpenAI

### Instalación

```bash
# Clona el repositorio
git clone https://github.com/LostoVayne/meet-ai-platform.git
cd meet-ai-platform

# Instala dependencias (elige uno)
bun install
# o
npm install
# o
yarn

# Configura variables de entorno
cp .env.example .env.local

# Inicia el servidor de desarrollo
bun dev
# o
npm run dev
# o
yarn dev
```

---

## 🚀 Deploy en AWS Amplify

1. Conecta tu repositorio en AWS Amplify.
2. Configura las variables de entorno en el panel de Amplify.
3. Amplify detecta Next.js y usa `amplify.yml` para el build.
4. El deploy es automático en cada push a la rama principal.

---

## 🧩 Uso de shadcn/ui

- Componentes reutilizables en `src/components/ui/`.
- Ejemplo:

```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary">Iniciar reunión</Button>
```

---

## 🔑 Better Auth

- Autenticación segura y moderna.
- Flujos en `src/app/(auth)/sign-in` y `sign-up`.
- Vistas personalizadas en `src/modules/auth/ui/views/`.

---

## 💳 Polar (Pagos y Suscripciones)

- Integración con Polar para suscripciones y pagos.
- Configura tu clave en las variables de entorno.
- El flujo de pago se maneja desde el dashboard.

---

## 📚 Reglas y buenas prácticas

- Usa **Bun** para desarrollo rápido y eficiente.
- Sigue la convención de carpetas de Next.js (app router).
- Componentes UI en `src/components/ui/`.
- Hooks personalizados en `src/hooks/`.
- Mantén dependencias actualizadas.
- Usa ESLint y Prettier para mantener el código limpio.
- No subas claves ni secretos al repositorio.

---

## 🧪 Testing

- Próximamente: integración con Jest y pruebas E2E.

---

## 🤝 Contribuir

1. Haz un fork del repositorio.
2. Crea una rama para tu feature/fix.
3. Haz un PR describiendo tus cambios.

---

## 📞 Soporte

¿Dudas o sugerencias? Abre un issue o contacta a [Lostovayne](https://github.com/LostoVayne).

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.