// Importación de módulos
import express from 'express';
import config from './config';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';

// Importación de rutas
import portalRoutes from './routes/portal.routes';
import authRoutes from './routes/auth.routes';

// Configuración de la aplicación
const app = express();
app.set('view engine', 'ejs'); // Define EJS como el motor de plantillas
app.set('views', path.join(__dirname, '/views')); // Configura la ruta de las vistas
app.use(express.static(path.join(__dirname, '/public'))); // Configura los archivos estáticos desde la carpeta 'public'

// Middlewares
app.use(express.urlencoded({ extended: false })); // Configuración para parseo de datos de formularios
app.use(morgan('dev')); // Middleware de logging para desarrollo
app.use(cookieParser()); // Middleware para parsear cookies
app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/', portalRoutes); // Rutas del portal
app.use('/', authRoutes); // Rutas de autenticación

// Inicio del servidor
app.listen(config.port, () => {
  console.log(`Servidor iniciado en http://localhost:${config.port}`); // Mensaje de confirmación al iniciar el servidor
});



