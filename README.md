# 🚀 Pruebas Automatizadas con Cypress

## 📄 Descripción General

Este proyecto contiene un conjunto de **pruebas automatizadas** desarrolladas con Cypress para verificar diversos aspectos del sitio web de [Heroku](https://www.heroku.com). Las pruebas están organizadas en categorías como navegación, diseño responsivo, rendimiento, y más.

---

## ✅ Pruebas Incluidas

### 1. 📷 Carga de Imágenes y Contenido (`T1-Carga.cy.js`)
- Verifica que los elementos clave de la página principal se carguen correctamente.
- Valida que el logo de Heroku sea visible y tenga el enlace correcto.
- Comprueba que el título principal contenga la palabra **"Cloud"**.

---

### 2. 🔗 Navegación en la Barra Superior (`T2-Navegacion.cy.js`)
- Valida la funcionalidad de la barra de navegación.
- Navega a **Products** y valida que la URL cambie a `/products`.
- Navega a **Pricing** y valida que la URL cambie a `/pricing` y el encabezado esté visible.

---

### 3. ⚡ Call-to-Action (`T3-Call.cy.js`)
- Verifica el botón **"Get Started for Free"**.
- Intercepta la redirección al hacer clic.
- Simula una respuesta exitosa y valida el cambio a la URL `/signup`.

---

### 4. 📱 Diseño Responsivo (`T4-Diseño.cy.js`)
- Valida el diseño en **Desktop**, **Tablet** y **Mobile**.
- Asegura que el menú superior y el botón **"Get Started for Free"** sean visibles en todos los tamaños.

---

### 5. 📝 Formulario de Contacto (`T5-Fixtures.cy.js`)
- Verifica la funcionalidad del formulario en **Contact Sales**.
- Rellena con datos de un archivo fixture.
- Intercepta la solicitud `POST` y simula una respuesta exitosa.
- Valida el mensaje de confirmación.

---

### 6. ⏱️ Pruebas de Rendimiento (`T6-Rendimiento.cy.js`)
- Mide el tiempo desde el inicio hasta que el logo sea visible.
- Valida que el tiempo de carga sea inferior a **3000 ms**.
- Registra el resultado en la consola.

---

## ⚙️ Requisitos Previos

- [Node.js](https://nodejs.org) (versión 12 o superior)
- Cypress instalado localmente:
  
  ```bash
  npm install cypress --save-dev

