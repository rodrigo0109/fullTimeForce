<div align="center">
<h1> FULL TIME FORCE TEST </h1>
</div>

<br>
<br>
<h1> First steps 🚀 </h1>

With the following instructions you will be able to set this project up locally.

**📑    Requirements**

In order to run this application you will need to have the latest version of NPM and Node installed on your computer, you can check in console if you have it installed doing 

```
npm -v
```
or

``` 
node-v
```

Or you can download it for free at the following link - <https://nodejs.org/es/download/> .


<div align="center">

![](./Readme/Aspose.Words.ea102fbd-e677-478a-991b-66b51ee3534b.002.png)

</div>

Then click on Code, copy the link to the repository to clone it locally using gitBash or you can download the Zip file and unzip it on your computer.

<div align="center">

![image](https://github.com/rodrigo0109/fullTimeForce/assets/74619422/eb3d40a3-5de0-49b6-93ca-78b73ba2265c)

</div>

<br>
<br>
<h1>To install 🛠 </h1>

It is time to run the application.

You need to open two terminals, where one will point to our Front and the other to our back.

The address of the front end terminal should end in the "client" folder.
<div align="center">

![image](https://github.com/rodrigo0109/fullTimeForce/assets/74619422/0934d60a-2949-4afd-b921-a0e378aca4f5)

</div>

The address of the backend terminal should end in the "commitapi" folder.
<div align="center">

![image](https://github.com/rodrigo0109/fullTimeForce/assets/74619422/d32e82f8-943b-4bce-91a9-6a1aac694a0b)

</div>


Then in both terminals you must execute the following command

```
npm install
```

With this command we download and install all the dependencies we use in the project automatically. The time of this process depends on your internet connection and the processing power of your computer, be patient, it may take a few minutes.

Next, you will need to create a file under the name ".env" (without quotes) in both folders (client and commitapi):

The .env file in the client folder will contain the following variables:

```
VITE_SERVER=
VITE_APP_AUTH0_DOMAIN=
VITE_APP_AUTH0_CLIENT_ID=

```

The .env file in the commitapi folder will contain the following variable:

```
MONGODB_URI=

```
The values that will go into each variable will be sent by e-mail, as it is sensitive information..
<br>
<br>


Then, to start the application in your browser, you must execute the following line of code in the frontend (client) terminal:

```
npm run dev
```


You will have to do something similar to start the server, run the following line of code in the backend terminal (commitapi):

```
npm run start:dev
```

These commands execute the scripts contained in the file named package.json, after that you should have the backend ready and the frontend up in the browser..

You can make changes to the code, and when they are saved you will notice that your browser will refresh with them.

<br>
<br>

In the page you will two fields to search a any public repo by owner and repo name.
<div align="center">
![image](https://github.com/rodrigo0109/fullTimeForce/assets/74619422/564d7b06-0beb-4828-be94-255911bdcf0a)
</div>

Points for improvement:

- Implement testing.
- Better way to manage message error response from backend.
- Dockerization.
