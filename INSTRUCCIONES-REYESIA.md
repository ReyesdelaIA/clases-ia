# Cómo configurar reyesia.com con popup (sin URLs feas)

## Objetivo final

- **reyesia.com** y **www.reyesia.com** → Tu web principal (Netlify) + popup de cursos encima
- **reyesia.com/marzo** → Landing de cursos (sin popup)
- Todo con URLs limpias, sin netlify.app

---

## PASO 1: Añadir subdominio cursos.reyesia.com en Vercel

1. En **Vercel** → Proyecto **clases-ia** → **Settings** → **Domains**
2. Añade: **cursos.reyesia.com**
3. Vercel te dará un registro CNAME. Anótalo.

---

## PASO 2: DNS en GoDaddy

1. Entra a **GoDaddy** → **reyesia.com** → **DNS**
2. **Añadir** un nuevo CNAME:
   - **Nombre:** `cursos`
   - **Valor:** `cname.vercel-dns.com` (o el que te indique Vercel)
3. **Guardar**

---

## PASO 3: Cambiar reyesia.com y www a Netlify

1. En **GoDaddy** → DNS de reyesia.com:
   - **Edita** el registro A de `@` (reyesia.com): cambia `76.76.21.21` por **`75.2.60.5`** (IP de Netlify)
   - **Edita** el CNAME de `www`: cambia `cname.vercel-dns.com` por **`elaborate-kringle-066cad.netlify.app`**

2. Espera 10–30 minutos a que se propaguen los cambios.

---

## PASO 4: Netlify – dominio principal

1. En **Netlify** → Proyecto **elaborate-kringle-066cad** → **Domain management**
2. Comprueba que **reyesia.com** y **www.reyesia.com** estén como dominios principales
3. Si aparecen como “Pending”, espera a que DNS se propague; deberían pasar a verificados

---

## PASO 5: Añadir el popup en tu web de Netlify

1. En el repo **mi-pagina-web** en GitHub
2. Busca el archivo **index.html** (o el HTML principal que se carga en la raíz)
3. Antes de `</body>`, añade:

```html
<script src="https://cursos.reyesia.com/popup-script.js" async></script>
```

4. Haz commit y push. Netlify desplegará automáticamente.

---

## PASO 6: Redirect reyesia.com/marzo

1. En el repo **mi-pagina-web**, dentro de la carpeta **public**
2. Crea o edita el archivo **`_redirects`**
3. Añade esta línea:

```
/marzo    https://cursos.reyesia.com/cursomarzo    200
```

4. El código `200` hace que la URL se mantenga como **reyesia.com/marzo** aunque el contenido venga de cursos.reyesia.com
5. Commit y push

---

## PASO 7: Push del código de clases-ia

En la carpeta **clases-ia**:

```bash
git add -A
git commit -m "Embed popup + instrucciones"
git push
```

---

## Resumen

| URL | Contenido |
|-----|-----------|
| reyesia.com | Web principal + popup |
| www.reyesia.com | Web principal + popup |
| reyesia.com/marzo | Landing de cursos directa |
| cursos.reyesia.com | Infraestructura del popup (no la usan directamente) |
