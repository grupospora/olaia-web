# OLAIA Properties

Base técnica para la web de OLAIA Properties. La portada provisional permite comprobar el despliegue.

## Compilación local

Con Node.js 24, ejecuta `npm run build`. El sitio generado queda en `dist/`. Abre `dist/index.html` para comprobar la portada.

Las páginas HTML se mantienen en la raíz, los recursos en `assets/` y los componentes compartidos en `src/includes/`. Los enlaces a recursos deben ser relativos para funcionar bajo `/olaia-web/`.

## GitHub Pages

Crea `grupospora/olaia-web` como repositorio público si quieres replicar la visibilidad de NUVIA. Sube estos archivos a `main`, incluida la carpeta oculta `.github/`. En **Settings → Pages → Build and deployment → Source**, elige **GitHub Actions**.

En **Actions → Publicar OLAIA Properties en GitHub Pages**, pulsa **Run workflow** y selecciona `main`. Las siguientes actualizaciones de `main` activarán el despliegue automáticamente. Comprueba el resultado y abre la URL que devuelve el paso de publicación. La URL prevista es https://grupospora.github.io/olaia-web/.
