# 🍽️ SmartMenu
## Sistema de Gestión de Pedidos

Una aplicación web para gestionar pedidos en un restaurante, con roles diferenciados, filtros, estadísticas y modo oscuro. Hecha con ❤️ usando React, Express y SQLite.

<p align="center">
    <img src='./frontend/src/assets/img-preview/preview-1.png' alt='Login' width="250" />
    <img src='./frontend/src/assets/img-preview/preview-2.png' alt='Estadisticas' width="250" />
</p>

<p align="center">
    <img src='./frontend/src/assets/img-preview/preview-5.png' alt='Desktop' width="300" />
</p>

## 🛠️ Tecnologías
* Frontend: React + React Router + Context API
* Backend: Node.js + Express
* Base de datos: SQLite + Sequelize ORM
* Estilos: SCSS + modo oscuro
* Control de Acceso: Autenticación y roles (mozo, cocina, admin)

## 🚀 Funcionalidades
* Login con persistencia usando LocalStorage
* Rutas protegidas según rol (mozo, cocina, admin)
* Crear, editar y eliminar pedidos
* Filtros por estado de pedido (pendiente, en preparación, entregado)
* Ordenar pedidos por fecha
* Estadísticas en tiempo real de pedidos por estado
* Modo oscuro 🌙/claro ☀️
* Panel exclusivo para cocina y vista solo-lectura
* Administración de usuarios y roles (en proceso si querés seguir)


## 🧑‍💻 Roles
* Mozo: puede ver estadísticas globales, crear, editar y eliminar pedidos.
* Cocina: solo ve los pedidos, sin posibilidad de modificarlos.

Creado con 💖 por GGabi40.
