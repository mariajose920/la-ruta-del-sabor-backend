# La Ruta del Sabor - Backend API

Bienvenido al repositorio del backend de "La Ruta del Sabor", un sistema de gestión para restaurantes, platos y su personal. Esta API RESTful está construida en Node.js utilizando Express y conectada a una base de datos MySQL.

## Estructura del Backend

El proyecto sigue una arquitectura modular separando las rutas, los controladores y la configuración de la base de datos para mantener el código limpio y escalable:

- **`controllers/`**: Contiene la lógica de negocio y las consultas SQL a la base de datos.
- **`routes/`**: Define los endpoints de la API y los enlaza con sus controladores correspondientes.
- **`database/`**: Centraliza la configuración y conexión a la base de datos MySQL.
- **`sql/`**: Archivos `.sql` para la inicialización de la base de datos (creación de tablas, claves foráneas y datos de prueba).
- **`index.js`**: Archivo principal o punto de entrada de la aplicación. Configura middlewares, CORS y levanta el servidor.

## Controladores Creados

Se han desarrollado tres controladores principales para manejar las entidades del sistema:

1. **`restaurantesController.js`**: Maneja el CRUD de los restaurantes y los endpoints anidados para recuperar platos y equipos asociados a un restaurante en específico.
2. **`platosController.js`**: Maneja la creación, lectura, actualización y eliminación de los platos del menú.
3. **`equiposController.js`**: Gestiona el personal (equipos) asignado a los distintos restaurantes.

## Rutas Implementadas

A continuación, los endpoints expuestos por la API REST:

### Restaurantes (`/api/restaurantes`)
- `GET /api/restaurantes`: Obtener todos los restaurantes.
- `GET /api/restaurantes/:id`: Obtener el detalle de un restaurante por ID.
- `GET /api/restaurantes/:id/platos`: Obtener todos los platos asociados a un restaurante.
- `GET /api/restaurantes/:id/equipos`: Obtener todo el equipo de trabajo asociado a un restaurante.
- `POST /api/restaurantes`: Crear un nuevo restaurante.
- `PUT /api/restaurantes/:id`: Actualizar la información de un restaurante.
- `DELETE /api/restaurantes/:id`: Eliminar un restaurante (elimina en cascada sus platos y equipos).

### Platos (`/api/platos`)
- `GET /api/platos`: Obtener todos los platos.
- `GET /api/platos/:id`: Obtener un plato por su ID.
- `POST /api/platos`: Crear un nuevo plato.
- `PUT /api/platos/:id`: Actualizar un plato.
- `DELETE /api/platos/:id`: Eliminar un plato.

### Equipos (`/api/equipos`)
- `GET /api/equipos`: Obtener todos los miembros del equipo.
- `GET /api/equipos/:id`: Obtener un miembro del equipo por ID.
- `POST /api/equipos`: Agregar un nuevo miembro al equipo.
- `PUT /api/equipos/:id`: Actualizar los datos de un miembro del equipo.
- `DELETE /api/equipos/:id`: Eliminar un miembro del equipo.

## Configuración de Conexión a MySQL

La conexión a la base de datos se realiza mediante el paquete `mysql2`. La configuración está centralizada en `database/db.js` y las credenciales se cargan de manera segura utilizando variables de entorno a través del paquete `dotenv`.

Para levantar el proyecto localmente y conectar la base de datos, debes seguir estos pasos:

1. Asegúrate de tener tu servidor MySQL encendido (ej. XAMPP, WAMP o Docker).
2. Asegúrate de contar con el archivo `.env` en la raíz del proyecto con las siguientes credenciales:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ruta_del_sabor
```

3. Importa o ejecuta el archivo `sql/init.sql` en tu gestor de base de datos para crear la estructura de las tablas, relaciones y cargar los datos semilla de prueba.

OK


