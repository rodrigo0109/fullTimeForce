

<br>
<br>
<h1> Primeros pasos 🚀 </h1>

Con las siguientes instrucciones podrás poner en funcionamiento nuestro proyecto localmente .

**📑    Requerimientos**

Para poder poner a correr esta aplicación tendrás que tener instalado en tu ordenador con anterioridad la última versión de NPM y Node, puedes chequear en consola si la tienes instalada haciendo 

```
npm -v
```
ó también

``` 
node-v
```

Sino en el siguiente link puedes descargarla gratuitamente - <https://nodejs.org/es/download/> .

Luego, deberás ingresar a nuestro repositorio de GitHub:
https://github.com/delosandesdevs/frontCreditu

Copia el repositorio haciendo click en Fork, así obtendrás una copia del mismo en tu Github.

<div align="center">

![](./Readme/Aspose.Words.ea102fbd-e677-478a-991b-66b51ee3534b.002.png)

</div>

A continuación haz click en Code, copiando el link del repositorio para clonarlo localmente mediante gitBash o puedes descargar el Zip para luego descomprimirlo en tu computadora.

<div align="center">

![image](https://github.com/rodrigo0109/fullTimeForce/assets/74619422/eb3d40a3-5de0-49b6-93ca-78b73ba2265c)

</div>

<br>
<br>
<h1>Para instalar 🛠 </h1>

Llegó el momento para hacer correr la aplicación.

Necesitas abrir dos terminales, donde una apuntara a nuestro Front y otra a nuestro back.

La terminal del front debera terminar en la carpeta "client"
<div align="center">

![image](https://github.com/rodrigo0109/fullTimeForce/assets/74619422/0934d60a-2949-4afd-b921-a0e378aca4f5)

</div>

La terminal del back debera terminar en la carpeta "commitapi"
<div align="center">

![image](https://github.com/rodrigo0109/fullTimeForce/assets/74619422/d32e82f8-943b-4bce-91a9-6a1aac694a0b)

</div>


Luego en ambas terminales deberás ejecutar el siguiente comando

```
npm install
```

Con este comando descargamos e instalamos todas las dependencias que utilizamos en el proyecto de forma automática. El tiempo de este proceso depende de tu conexión a internet y del poder del procesamiento de tu ordenador, ten paciencia, puede tardar unos minutos.

Después, necesitarás crear un archivo bajo el nombre ".env" (sin comillas) en ambas carpetas (client y commitapi):

El archivo .env de la carpeta client contendrá las siguientes variables:

```
VITE_SERVER=
VITE_APP_AUTH0_DOMAIN=
VITE_APP_AUTH0_CLIENT_ID=

```

El archivo .env de la carpeta commitapi contendrá la siguiente variable:

```
MONGODB_URI=

```
Los valores que irán dentro de cada variable serán enviados por correo electrónico, ya que es información sensible.
<br>
<br>


Luego, para iniciar la aplicación en tu navegador deberás ejecutar la siguiente línea de código en la terminal del frontend (client):

```
npm run dev
```


Deberás hacer algo similar para iniciar el servidor, ejecuta la siguiente línea de código en la terminal del backend (commitapi):

```
npm run start:dev
```

Estos comandos ejecutan los scripts contenidos en el archivo que se denomina package.json, luego de esto deberias tener el backend listo y el frontend levantado en el navegador.

Puedes realizar cambios en el código, y al ser guardados notarás que tu navegador se refrescará con los mismos.

<br>
<br>
<h1>Ahora a navegar 🏄</h1>

- **Home**

Al iniciar la aplicación web te encontrarás con los 10 mejores jugadores de Free Forest.

<div align="center">

![](./Readme/Aspose.Words.ea102fbd-e677-478a-991b-66b51ee3534b.004.png)

</div>

En la barra de navegación encontrarás el botón “INICIAR SESIÓN” , allí se abrirá una ventana de autenticación, la que recomendamos que completes, así podrás acceder a todas las funcionalidades de la app.

<div align="center">

![](./Readme/Aspose.Words.ea102fbd-e677-478a-991b-66b51ee3534b.005.png)

</div>




<img src='./Readme/juano.png' alt="drawing" width="100"/>


<div >

- [Ramiro Grisales](<https://github.com/orgs/delosandesdevs/people/orimarselasirg>)

</div>


<img src='./Readme/rami.png' alt="drawing" width="100"/>

<div >

- [Rodrigo Pérez](<https://github.com/orgs/delosandesdevs/people/rodrigo0109>)

</div>



<img src='./Readme/rodri.png' alt="drawing" width="100"/>





</div>

