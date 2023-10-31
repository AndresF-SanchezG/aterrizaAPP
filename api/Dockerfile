# Usa la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /api

# Copia los archivos de configuración y las dependencias del proyecto
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Ejecuta el comando para construir la aplicación en modo de producción
RUN npm run build

# Instala el servidor web "serve" globalmente (puedes cambiarlo si prefieres otro servidor)
RUN npm install -g serve

# Expone el puerto en el que se ejecutará el servidor web (generalmente 5000 para "serve")
EXPOSE 5173

# Comando para iniciar el servidor web y servir la aplicación construida en modo de producción
CMD ["serve", "-s", "dist", "-l", "5173"]

