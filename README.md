# Backend Node.js con Express.js y MongoDB

Backend basico desarrollado con Node.js, Express.js y MongoDB para gestionar dos colecciones `Usuarios` y `Productos`

## Requisitos previos

- Node.js (v16 o superior)
- MongoDB (local o MongoDB Atlas)


## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL del repositorio>
2. Navega a la carpeta del proyecto:
    cd backend-nodejs
3. Instala las dependencias:
    npm install
4. Configura la conexion a MongoDB:
    Reemplaza la cadena de conexion de MongoDB Atlas con tus credenciales:
    const mongoURI = 'mongodb+srv://<tuusuario>:<tucontraseña>@cluster0.mongodb.net/Sample?retryWrites=true&w=majority';

## EJECUCION
Para iniciar el servidor corre:
    node app.js