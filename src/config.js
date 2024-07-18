import { config } from 'dotenv';

// Cargar variables de entorno desde el archivo .env
config();

// Exportar las configuraciones necesarias para la aplicación
export default {
    host: process.env.HOST || '', // Dirección del host de la base de datos
    database: process.env.DATABASE || '', // Nombre de la base de datos
    user: process.env.USER || '', // Usuario de la base de datos
    password: process.env.PASSWORD || '', // Contraseña del usuario de la base de datos
    port: process.env.PORT || '3000', // Puerto en el que corre la aplicación, por defecto 3000
    secret_key: process.env.JWT_SECRET_KEY || '' // Clave secreta para JWT
};
