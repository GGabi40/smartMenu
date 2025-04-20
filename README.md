# 🍽️ SmartMenu
## Sistema de Gestión de Pedidos

Una aplicación web para gestionar pedidos en un restaurante, con roles diferenciados, filtros, estadísticas y modo oscuro. Hecha con ❤️ usando React, Express y SQLite.

<p align="center">
    <img src='./frontend/src/assets/img-preview/preview-1.png' alt='Login' width="250" />
    <img src='./frontend/src/assets/img-preview/preview-2.png' alt='Estadisticas' width="250" />
    <img src='./frontend/src/assets/img-preview/preview-3.png' alt='Estadisticas' width="250" />
</p>

<p align="center">
    <img src='./frontend/src/assets/img-preview/preview-5.png' alt='Desktop' width="400" />
</p>

## 🛠️ Tecnologías
<div align="center">

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/Routing-React_Router-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge)
![Context API](https://img.shields.io/badge/State_Context_API-764ABC?logo=react&logoColor=white&style=for-the-badge)

![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/Framework-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)

![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?logo=sqlite&logoColor=white&style=for-the-badge)
![Sequelize](https://img.shields.io/badge/ORM-Sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge)

![SCSS](https://img.shields.io/badge/Estilos-SCSS-CC6699?logo=sass&logoColor=white&style=for-the-badge)
![Modo Oscuro](https://img.shields.io/badge/UI-Modo_Oscuro-555555?style=for-the-badge)

![Roles](https://img.shields.io/badge/Control_de_Acceso-Autenticación_y_Roles-blueviolet?style=for-the-badge)

</div>

## 🚀 Funcionalidades
- 🔐 Login persistente con `LocalStorage`
- 🔒 Rutas protegidas según rol (`mozo`, `cocina`)
- ✏️ Crear, editar y eliminar pedidos
- 🎯 Filtros por estado: `pendiente`, `en preparación`, `entregado`
- 🕒 Ordenar pedidos por fecha de creación
- 📊 Estadísticas en tiempo real de pedidos por estado
- 🌓 Modo oscuro / claro
- 🧾 Vista exclusiva para cocina en modo solo-lectura
- 🛠️ Administración de usuarios y roles *(en desarrollo)*


## 🧑‍💻 Roles
- 👨‍🍽️ **Mozo**
  - Acceso completo a los pedidos
  - Puede **crear**, **editar**, **eliminar** pedidos ➕✏️🗑️
  - Visualiza **estadísticas globales**

- 👩‍🍳 **Cocina**
  - Puede **ver** pedidos
  - Cambiar el estado a **"en preparación"** o **"entregado"**

Creado con 💖 por GGabi40.
