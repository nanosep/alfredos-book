# Decisions

## 2026-03-18

- La plataforma objetivo sera Astro.
- Razon: el sitio combina contenido editorial extenso con pequenos modulos interactivos, un caso adecuado para contenido estatico con islas.

- El producto inicial sera una web HTML navegable del libro, no una app con cuentas ni backend.
- Razon: reduce complejidad y acelera la publicacion de una primera version util.

- Las imagenes y videos quedaran desacoplados del contenido textual.
- Razon: el usuario generara esos assets fuera de este flujo y debe poder integrarlos despues sin rehacer la estructura.

- Las calculadoras se definiran por bloque tematico y no una por cada pagina del libro.
- Razon: evita sobrecargar la UX y concentra el valor interactivo en decisiones practicas.

- El calendario sera un modulo transversal del sitio.
- Razon: su utilidad cruza huerta, frutales, conservas, podas, siembras y mantenimiento anual.

- `v1` debe incluir el libro entero montado en la web.
- Razon: el entregable no es un piloto aislado sino una version HTML completa del libro.

- La seccion `Agua` sera la referencia completamente desarrollada en `v1`.
- Razon: concentra bien texto tecnico, recursos visuales y una calculadora clara.

- El contenido del libro se preservara de forma casi literal.
- Razon: el autor no quiere una version resumida o reinterpretada del texto.

- Imagenes, videos y graficos apoyan la comprension pero no sustituyen el texto.
- Razon: la multimedia mejora la experiencia sin alterar el valor editorial del contenido original.

- Habra una calculadora en cada seccion donde aplique.
- Razon: el criterio es utilidad real por bloque tematico, no cobertura artificial por capitulo.

- El calendario vivira como modulo global del sitio.
- Razon: centraliza la planificacion anual y evita duplicar la misma logica entre secciones.

- La primera validacion sera una demo local ejecutable en Astro.
- Razon: es la superficie minima real para validar estructura, lectura e interaccion sin depender aun de despliegue.
