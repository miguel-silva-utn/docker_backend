# Selecciona una imagen base de Node.js con la versión deseada:
FROM node:alpine

# Establece el directorio de trabajo en /app:
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app:
COPY package*.json .

# Instala las dependencias de la aplicación:
RUN npm install

# Copia todos los archivos de tu proyecto en el directorio de trabajo:
COPY . .

# Ejecuta el comando de construcción de Vite.js para compilar la aplicación para producción:
# RUN npm run build

# Expón el puerto en el que se ejecutará tu aplicación Vite.js:
EXPOSE 4000

# Define el comando para iniciar la aplicación en modo de desarrollo:
CMD [ "npm", "start" ]

# Ejecuta el siguiente comando para construir la imagen Docker:
# docker build -t docker_backend .

# Luego, ejecutar un contenedor a partir de la imagen creada:
# docker run -p 4000:4000 -d docker_backend
# docker run --name docker_backend -p 4000:4000 -d docker_backend