# Reyes IA - Setup completo (documentación final)

## Resumen de la arquitectura

| URL | Contenido |
|-----|-----------|
| **reyesia.com** | Web principal (Netlify) + popup de cursos encima |
| **www.reyesia.com** | Igual que reyesia.com |
| **reyesia.com/marzo** | Landing de cursos directa (sin popup) |
| **cursos.reyesia.com** | App de cursos (Vercel) - popup, embed, formulario |

---

## DNS (GoDaddy)

- **A @** → `75.2.60.5` (Netlify)
- **CNAME www** → `elaborate-kringle-066cad.netlify.app` (Netlify)
- **CNAME cursos** → `82f8e73e35522675.vercel-dns-017.com` (Vercel)
- **CNAME main** → `elaborate-kringle-066cad.netlify.app` (Netlify)
- **CNAME intranet** → `elaborate-kringle-066cad.netlify.app` (Netlify)

---

## Netlify (elaborate-kringle-066cad)

- **Repo:** ReyesdelaIA/mi-pagina-web
- **Dominio principal:** reyesia.com
- **Snippet Injection:** Popup de cursos (antes de `</body>`)
  - Crea overlay + iframe a `https://cursos.reyesia.com/embed`
  - Al cerrar, usa `sessionStorage` para no mostrar de nuevo
- **_redirects** (en public/): `/marzo` → `https://cursos.reyesia.com/cursomarzo` (status 200)

---

## Vercel (clases-ia)

- **Repo:** ReyesdelaIA/clases-ia
- **Dominios:** cursos.reyesia.com, clases-ia.vercel.app
- **Variables de entorno:**
  - `NEXT_PUBLIC_FORMSPREE_ID` = `xaqdvppp` (formulario de inscripciones)
  - `RESEND_API_KEY`, `LEADS_TO_EMAIL`, `RESEND_FROM_EMAIL` (reserva, no usados con Formspree)

---

## Formspree

- **Form ID:** xaqdvppp
- **Email de notificaciones:** felipe@reyesia.com
- **Formulario:** Inscripciones cursos marzo

---

## Archivos clave del proyecto

- `app/embed/page.tsx` - Página del popup (cargada en iframe desde reyesia.com)
- `app/cursomarzo/page.tsx` - Landing directa en reyesia.com/marzo
- `public/popup-script.js` - Script alternativo para el popup (no usado; se usa snippet inline)
- `components/SignupForm.tsx` - Formulario de inscripción (Formspree)
- `components/LandingPopup.tsx` - Contenido del popup (usado en HomeWithPopup y embed)
- `components/HomeWithPopup.tsx` - Página inicial cuando reyesia.com apuntaba a Vercel (ahora no se usa)
- `NETLIFY-SNIPPET.html` - Código para el Snippet Injection en Netlify

---

## Flujo del usuario

1. Entra a **reyesia.com** → ve su web + popup de cursos encima
2. Cierra el popup (X o tocando fuera) → queda en la web principal
3. Si quiere inscribirse: completa el formulario → Formspree envía email a felipe@reyesia.com
4. Si entra a **reyesia.com/marzo** → landing de cursos sin popup

---

*Documentación generada el 19/02/2025*
