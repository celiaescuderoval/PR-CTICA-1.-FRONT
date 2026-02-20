# PRÁCTICA 1 - FRONT
En esta práctica he creado una aplicación con React y TypeScript que obtiene personajes de la API de Star Wars.
La aplicación muestra los personajes en tarjetas con su nombre, género y año de nacimiento.
También he añadido un botón para cargar más personajes y he controlado los estados de carga y error.


# COMANDOS
Los comandos necesarios son los siguientes: 
  - Comando para intalar todas las dependencias necesarias: npm install
  - Comando para poder arrancar el proyecto: npm run dev


# CREACIÓN DEL PROYECTO
1. Ir a la carpeta donde quiero crear el proyecto (por ejemplo, Escritorio): cd Escritorio
2. Crear el proyecto con Vite (React + TypeScript): npm create vite@latest react-ts-intro
3. Elegir las siguientes opciones cuando lo pida:
  - Framework: react
  - Variant: typescript + react
  - Después continuar con las opciones que aparecen (yes / no según indique Vite).
5. Instalar las dependencias y ejecutar el proyecto: Puesto en el apartado anterior de COMANDOS
6. Instalar Axios para poder hacer peticiones a la API: npm install axios
7. Ejecutar el proyecto con npm run dev. Una vez ejecutado, se abrirá en http://localhost:5173/


# FUNCIONAMIENTO GENERAL 
  - Al iniciar la aplicación, se cargan los primeros personajes desde la API.
  - Los personajes se muestran en tarjetas en pantalla.
  - Al pulsar “Siguiente Página”, se cargan más personajes.
  - Los nuevos personajes se añaden a los anteriores.


# ESTRUCTURA DEL PROYECTO Y EXPLCIACION 
## api/api.ts
En esta carpeta he configurado la conexión con la API utilizando Axios. 
Con esta linea de código: (baseURL: import.meta.env.VITE_API_URL), indico que la URL base de la API se guarda en el archivo .env

## components/character/index.tsx
Este componente solo muestra un personaje en pantalla.
Contiene el componente Character, que se encarga de mostrar cada personaje en una tarjeta.
Recibe un personaje por props y muestra su nombre, género y año de nacimiento.

## components/character/style.css
En este archivo defino el estilo de las tarjetas de los personajes.
Organizo el contenido en columna, añado espacio interno y bordes redondeados.
También establezco el color de fondo, el color del texto y una sombra para la tarjeta.

## types/character.ts
Aquí defino cómo es un personaje.
Esto hace que TypeScript sepa que cada personaje tiene esas tres propiedades (nombre, género y año de nacimiento).

## types/index.ts
Sirve para exportar los tipos y poder usarlos en otros archivos.

## App.css
En este archivo he definido los estilos de la estructura principal de la aplicación.
Aquí organizo el contenedor general, creo la cuadrícula donde se muestran las tarjetas de los personajes y coloco el botón de paginación con separación y centrado.

## App.tsx
Este es el archivo más importante del proyecto, ya que contiene toda la lógica.
Aquí he definido varios estados:
  - characters: guarda la lista de personajes.
  - loading: controla si la aplicación está cargando.
  - error: guarda un mensaje si hay algún fallo.
  - url: contiene la página que se va a pedir a la API.
  - nextUrl: guarda la siguiente página que devuelve SWAPI.

He utilizado useEffect para hacer la llamada a la API cuando se carga la página y cada vez que cambia la variable url.

Con esta linea de código: (setCharacters((prev) => [...prev, ...res.data.results])) acumulo los personajes y hace que los nuevos personajes se añadan a los anteriores en lugar de reemplazarlos.

Para la paginación, guardo el campo next que devuelve la API en nextUrl.
Cuando se pulsa el botón “Siguiente Página”, se ejecuta setUrl(nextUrl), lo que provoca que el useEffect vuelva a ejecutarse y cargue más personajes.

## index.css
En este archivo he definido los estilos globales de la aplicación.
Aquí configuro el fondo, la tipografía general y centro el contenido.

## main.tsx
Es el archivo que arranca React y renderiza el componente App.
