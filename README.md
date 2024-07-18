## Descripción del Proyecto

### Objetivo

Desarrollar una aplicación web capaz de registrar alertas y sus respectivos comandos y que sirva de base central de la Dirección de Inteligencia del C5I.

### Problema a Resolver

Actualmente, el registro de alertas se realiza utilizando plantillas de Excel, lo cual es un proceso manual y propenso a errores. Al tener una aplicación web, se facilitará y automatizará este proceso mediante una interfaz de usuario intuitiva, reduciendo las probabilidades de errores y haciendo más eficiente el registro de datos.

### Beneficiarios

El equipo de analistas de la Dirección de Inteligencia del C5I.

### Procesos Principales

1. Registro de alertas con sus comandos.
2. Visualización del total de alertas registradas.

## UML de Clases

```plaintext
+-------------------+         +------------------+
|     Usuario       |         |      Comando     |
+-------------------+         +------------------+
| - id: int         |         | - id: int        |
| - nombre: String  |         | - nombre: String |
| - email: String   |         | - descripcion: String |
| - contraseña: String |      +------------------+
| - createAt: Date  |         | + crear()        |
| - updateAt: Date  |         | + editar()       |
| - comando_id: int |         | + eliminar()     |
| - rango_id: int   |         +------------------+
+-------------------+
| + registrar()     |
| + iniciarSesion() |
| + registrarDatos()|
| + editarDatos()   |
| + modificarDatos()|
| + eliminarDatos() |
+-------------------+

+-------------------+         +-------------------+
|       Rango       |         |      Alerta       |
+-------------------+         +-------------------+
| - id: int         |         | - id: int         |
| - descripcion: String |     | - tipo: String    |
+-------------------+         | - usuario_id: int |
                              +-------------------+
+----------------------------+| + registrarAlerta()|
|      DecomisoArmas         |+-------------------+
+----------------------------+
| - nombreProducto: String   |
| - fecha: Date              |
| - cce: int                 |
| - ccm: int                 |
| - ccn: int                 |
| - ccs: int                 |
| - total: int               |
| - usuario_id: int          |
+----------------------------+
| + registrarDecomiso()      |
| + editarDecomiso()         |
| + eliminarDecomiso()       |
+----------------------------+

+----------------------------+
|        Migración           |
+----------------------------+
| - id: int                  |
| - fecha: Date              |
| - frontera: String         |
| - nacionalidad: String     |
| - cantidad: int            |
| - usuario_id: int          |
+----------------------------+
| + registrarMigracion()     |
| + editarMigracion()        |
| + eliminarMigracion()      |
+----------------------------+
```

## Estructura de la Base de Datos

### Comando
- `id` (PK)
- `nombre`
- `descripcion`

### Rango
- `id` (PK)
- `descripcion`

### Usuario
- `id` (PK)
- `nombre`
- `email`
- `contraseña`
- `createAt`
- `updateAt`
- `comando_id` (FK, referencia `Comando.id`)
- `rango_id` (FK, referencia `Rango.id`)

### Alerta
- `id` (PK)
- `tipo` (Decomiso Mercancías, Migración, Decomiso de Armas)
- `usuario_id` (FK, referencia `Usuario.id`)

### DecomisoArmas
- `nombreProducto`
- `fecha`
- `cce`
- `ccm`
- `ccn`
- `ccs`
- `total`
- `usuario_id` (FK, referencia `Usuario.id`)

### Migración
- `id` (PK)
- `fecha`
- `frontera`
- `nacionalidad`
- `cantidad`
- `usuario_id` (FK, referencia `Usuario.id`)
