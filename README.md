# PRUEBA TÉCNICA PARA LA EMPRESA ORUSXPERT

## CRUD DE ESTUDIANTES, MAPAS, CONSUMO DE SERVICIOS REST

EL PRESENTE PROYECTO TUVO COMO FINALIDAD IMPLEMENTAR UN CRUD CON EL FRAMEWORK ANGULAR, CONSUMIENTO SERVICIOS POR LOS METODOS HTTP (POST, GET, DELETE, PUT, PATCH).

- SE HIZO USO DE LA LIBRERIA JSON-SERVER PARA SIMULAR UN BACKEND.
- SE USÓ ANGULAR MATERIAL EN EL DISEÑO DE LA INTERFAZ DE LA APLICACIÓN
- INSTALACIÓN DE ANGULAR GOOGLE MAPS: `https://angular-maps.com/guides/getting-started/`
- SE OBTUVO LA KEY PARA PODER ACCEDER A LOS COMPONENTES DE LA API DE GOOGLE MAPS EN: `https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key`. PARA ESTO SE DEBE CREAR UN NUEVO PROYECTO Y ADEMÁS HABILITAR ALGUNAS DE LAS OPCIONES QUE SE OFRECEN PARA LA API QUE SON FUNDAMENTALES PARA EL CORRECTO FUNCIONAMIENTO DEL MAPA. COMO LO SON: DIRECTIONS API Y MAPA JAVASCRIPT API.
- PUEDEA AGREGAR PUNTOS EN EL MAPA, CAMBIAR SU UBICACIÓN Y ELIMINARLOS

### TECNOLOGÍAS

- **LENGUAJE:** JAVASCRIPT
- **FRAMEWORK:** ANGULAR
- **LIBRERIAS:** JSON-SERVER, ANGULAR MATERIAL, SWEET ALERT 2, ANGULAR DE GOOGLE MAPS

## COMANDOS DE EJECUCIÓN

---

- **INSTALAR DEPENDENCIAS:** UBICARSE EN LA CARPETA DEL PROYECTO E INGRESAR EL COMANDO:

```
npm install
```

SI SE PRESENTA ALGÚN PROBLEMA AL INSTALAR LAS DEPENDENCIAS PROBAR CON:

```
npm install -f
```

- **RUTA DE EJECUCIÓN DEL SERVIDOR:** UBICARSE EN LA CARPETA ASSETS DEL PROYECTO.
  EJEMPLO:

```
cd C:\Users\crist\Desktop\proyecto_angular\src\assets
```

- **EJECUTAR SERVIDOR BACKEND:** PARA PONER EN MARCHA EL SERVIDOR INGRESA EN LA RUTA ACTUAL:

```
json-server --watch data.json
```

- **EJECUTAR FRONT END:** PARA PONER EN MARCHA EL FRONT END UBICATE DE NUEVO EN LA CARPETA DEL PROYECTO E INGRESA EL COMANDO:

```
ng serve
```

## ENDPOINTS

---

ENDPOINTS POR LOS CUALES SE CONSUMIERON LOS SERVICIOS:

- [POST] **CREAR UN ESTUDIANTE:** `localhost:3000/students`
- [GET] **OBTENER LISTA DE ESTUDIANTES:** `localhost:3000/students`
- [GET] **OBTENER UN ESTUDIANTE:** `localhost:3000/students/id_estudiante`
- [PATCH] **ACTUALIZAR TELÉFONO:** `localhost:3000/students/id_estudiante`
- [PUT] **ACTUALIZAR UN ESTUDIANTE:** `localhost:3000/students/id_estudiante`
- [DELETE] **ELIMINAR UN ESTUDIANTE:** `localhost:3000/students/id_estudiante`
