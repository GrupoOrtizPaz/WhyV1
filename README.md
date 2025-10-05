# Why! - Landing Page

Landing page estática optimizada para conversión directa por WhatsApp, diseñada con principios de neuroventas y enfocada en captación de clientes para servicios de eventos sociales y servicios digitales.

## 🚀 Despliegue en GitHub Pages

### Pasos para publicar:

1. **Subir archivos a GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Why! landing page"
   git push origin main
   ```

2. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "Deploy from a branch"
   - Elige la rama `main` y carpeta `/ (root)`
   - Guarda los cambios

3. **Acceder al sitio:**
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repositorio`

## 📁 Estructura del Proyecto

```
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── main.js            # JavaScript funcional
├── /assets
│   ├── Logowhy!.png   # Logo real de Why!
│   ├── favicon.png    # Favicon del sitio
│   └── portafolio.png # Imagen de portafolio
├── /carrusel
│   ├── DSC02433.jpg   # Imágenes del carrusel
│   ├── DSC02911.jpg
│   ├── IMG_1120.jpg
│   ├── IMG_1286 (1).jpg
│   └── LESTERUMG0005.jpg
├── README.md          # Este archivo
└── LICENSE            # Licencia del proyecto
```

## 🎨 Personalización

### Cambiar textos y contenido:

**Archivo:** `index.html`

- **Título principal:** Línea ~103 - Cambiar "Eventos inolvidables. Soluciones digitales claras."
- **Subtítulo:** Línea ~104 - Modificar descripción de servicios
- **Precios:** Línea ~104 y otras - Cambiar "Q600/hr" por tu tarifa
- **Testimonios:** Líneas ~312-324 - Reemplazar con testimonios reales
- **FAQ:** Líneas ~330-380 - Personalizar preguntas y respuestas

### Cambiar imágenes:

**Reemplazar archivos en `/assets/`:**
- `Logowhy!.png` - Logo principal (140px altura)
- `favicon.png` - Icono del sitio
- `portafolio.png` - Imagen de portafolio

**Reemplazar archivos en `/carrusel/`:**
- `DSC02433.jpg` a `LESTERUMG0005.jpg` - Imágenes del carrusel hero

### Modificar enlaces y contactos:

**WhatsApp:**
- Cambiar número: Buscar `50254113908` y reemplazar
- Mensaje prellenado: Modificar texto en `?text=...`

**Redes sociales:**
- Instagram: `https://www.instagram.com/whycommunity_/`
- Behance: `https://www.behance.net/WhyMediaGuatemala`

**Google Form:**
- Formulario: `https://forms.gle/L6C3RZU5EFjHPyUN6`

### Cambiar colores:

**Archivo:** `styles.css`

- **Color principal:** Buscar `--primary-color: #2C3E50` (azul gris oscuro)
- **Color de acento:** Buscar `--accent-color: #E74C3C` (rojo)
- **Color secundario:** Buscar `--secondary-color: #3498DB` (azul)
- **Color WhatsApp:** Buscar `--whatsapp-color: #25D366` (verde)

## 📊 UTM y Analytics

### UTM Parameters incluidos:

- **WhatsApp:** `utm_source=web&utm_medium=cta&utm_campaign=whatsapp`
- **Instagram:** `utm_source=web&utm_medium=social&utm_campaign=instagram`
- **Behance:** `utm_source=web&utm_medium=portafolio&utm_campaign=behance`
- **Form:** `utm_source=web&utm_medium=form&utm_campaign=reservas`

### Agregar Google Analytics:

En `index.html`, antes del cierre de `</head>`, agregar:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Funcionalidades Incluidas

### JavaScript (`main.js`):

- ✅ Smooth scroll para navegación
- ✅ Header sticky con efecto de scroll
- ✅ FAQ acordeón accesible
- ✅ Botón WhatsApp flotante persistente
- ✅ Carrusel automático en hero
- ✅ Menú móvil hamburguesa
- ✅ Animaciones de scroll
- ✅ Lazy loading de imágenes
- ✅ Navegación por teclado
- ✅ Optimizaciones de performance

### CSS (`styles.css`):

- ✅ Diseño responsive (mobile-first)
- ✅ Tipografías web (Inter + Playfair Display)
- ✅ Carrusel con overlay y blur
- ✅ Portafolio con imagen de fondo
- ✅ Paquetes de servicios detallados
- ✅ Animaciones y transiciones
- ✅ Accesibilidad (contraste AA, focus visible)
- ✅ Optimizaciones de performance

### HTML (`index.html`):

- ✅ SEO completo (meta tags, Open Graph, Twitter Cards)
- ✅ JSON-LD para LocalBusiness
- ✅ Estructura semántica
- ✅ Accesibilidad (ARIA labels, alt texts)
- ✅ Microcopy optimizado para conversión

## 🎯 Principios de Neuroventas Aplicados

### Elementos de conversión:

1. **Claridad en 3 segundos:** Título directo y beneficios claros
2. **CTA principal persistente:** Botón WhatsApp siempre visible
3. **Prueba social:** Testimonios y enlaces a portafolio
4. **Escasez suave:** "Fechas limitadas por mes"
5. **Anclaje de valor:** Destacar Q600/hr
6. **Lenguaje cercano:** Español guatemalteco, sin tecnicismos

### Optimizaciones UX:

- Carrusel automático con imágenes reales
- Botón WhatsApp flotante con animación
- Menú móvil hamburguesa
- Navegación suave entre secciones
- FAQ expandible para reducir fricción
- Diseño mobile-first
- Carga rápida (sin frameworks externos)

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Chrome Mobile
- ✅ Responsive design (320px - 1920px+)
- ✅ GitHub Pages compatible
- ✅ Sin dependencias externas

## 🚨 Checklist Pre-Despliegue

- [ ] Verificar todos los enlaces de WhatsApp
- [ ] Confirmar URLs de Instagram y Behance
- [ ] Validar Google Form de reservas
- [ ] Revisar textos y precios
- [ ] Probar en dispositivos móviles
- [ ] Verificar velocidad de carga
- [ ] Comprobar accesibilidad básica

## 📞 Soporte

Para dudas sobre personalización o despliegue, contactar por WhatsApp: [+502 5411 3908](https://wa.me/50254113908)

---

**Desarrollado con ❤️ para maximizar conversiones**
