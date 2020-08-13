Este proyecto fue creado con React JS,bootstrap 4,css,html,context Api y Javascript.

## Creación

Comando: create-react-app name-app

### `npm start`

Antes de iniciar el proyecto se recomienda descargar dependencias "npm install"

Para iniciar el proyecto se ejecuta con los siguientes comandos: npm start ó yarn start,
se abrira el proyecto en localhost:8001.

### `Estructura`

El proyecto se compone de 3 sesiones :
1.components
2.context
3.Image

App.js

1. Aqui se encuentran las diferentes partes de la pagina:
   **TopBarnner: Este componente es el encargado de mostrar el barnner superior y en el tiene un hijo llamado WatherBog este contiene los cuadros del extremo izquierdo.
   **CentralBarnner: Aqui se encuentran todas las pequeñas partes inferiores de la pagina estas son: DaysFord muestra los ultimos 3 dias de la semana, PlaceTo muestra una imagen, TopRow muestra avatars y 2 imagenes y por ultimo Worldwather es el banner derecho que muestra la temperatura de francia.

2. context api tiene 3 providers, estos son:
   ** ThemeProvider: Por medio de ajax consumo la api y capturo el clima de bogotá, banner superior.
   ** DaysProvider: Por el mismo metodo capturo los datos de los ultimos 3 días.
   \*\*FranceProvider: consume la api con los datos de paris.

3. Las imagenes que utilice para la pagina.
