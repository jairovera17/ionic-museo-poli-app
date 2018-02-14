# Proyecto Final de Aplicaciones Moviles

## Descripción

Este proyecto fue desarrollado con el framework ionic que puede compilar aplicaciones de forma nativa para iOS, Android y Windows Phone.

## Configuración

### Requisitos

1. Java JDK

Disponible para descargar en: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

2. Android Studio

Disponible para descargar en:
https://developer.android.com/studio/index.html

3. Nodejs

Disponible para descargar en:
https://nodejs.org/es/

4. Ionic Framwork

Despues de instalar Nodejs ingresar el siguiente comando en la terminal:

```
npm install -g cordova ionic
```
### Clonar el proyecto

Ingresar el siguiente comando en la terminal:

```
git clone https://github.com/jairovera17/ionic-poli-app.git
```
### Instalar las dependencias

Ingresar los siguientes comandos desde la carpeta del repositorio clonado:
```
cd poliapp
npm install
```

## Despliegue

### Web 

Ionic permite desplegar el proyecto de forma web, es necesario ingresar desde la carpeta poliapp:

```
ionic serve -l
```

### Android sin firmar (Debug)

Generar apks sin firmar
```
ionic cordova build android
```

### PlayStore (Google) y AppStore (iOS)
Seguir la documentación oficial en :

https://ionicframework.com/docs/v1/guide/publishing.html




