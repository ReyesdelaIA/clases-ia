# Landing Reyes IA

Landing de inscripción para clases presenciales de IA en Santiago.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir en `http://localhost:3000`.

## Notificaciones de nuevos registros (email)

El formulario envía datos a `POST /api/lead`, que manda correo usando Resend.

### 1) Variables de entorno

Crear `.env.local` basado en `.env.example`:

```bash
cp .env.example .env.local
```

Completar:

- `RESEND_API_KEY`: API key de Resend
- `LEADS_TO_EMAIL`: correo que recibe leads (ej: `felipe@reyesia.com`)
- `RESEND_FROM_EMAIL`: remitente (idealmente en dominio verificado)

### 2) Probar envío

Con el servidor corriendo, enviar el formulario desde la landing.

## Deploy en Vercel

```bash
npm i -g vercel
vercel
```

Luego, en Vercel Dashboard:

1. Project Settings -> Environment Variables: agregar las 3 variables (`RESEND_API_KEY`, `LEADS_TO_EMAIL`, `RESEND_FROM_EMAIL`).
2. Hacer redeploy.

## Conectar dominio `www.reyesia.com`

En Vercel:

1. Ir al proyecto -> **Settings -> Domains**
2. Agregar:
   - `reyesia.com`
   - `www.reyesia.com`
3. En tu proveedor DNS, crear/ajustar:
   - `A` para raíz (`@`) a `76.76.21.21`
   - `CNAME` para `www` a `cname.vercel-dns.com`
4. Esperar propagación y verificar en Vercel.
