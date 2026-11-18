# Usar la imagen oficial de Node.js con soporte vigente
FROM node:22-slim

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los ficheros del proyecto al directorio de trabajo
COPY . .

# Instalar dependencias (si las hubiera en package.json)
RUN npm install

# Exponer el puerto 3000 que utiliza la aplicación Node.js
EXPOSE 3000

# Comando por defecto para iniciar la aplicación mediante el script npm start
CMD ["npm", "start"]