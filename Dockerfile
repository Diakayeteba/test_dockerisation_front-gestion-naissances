# 1. Image de base Node.js légère
FROM node:18-alpine

# 2. Définition du répertoire de travail dans le conteneur
WORKDIR /app

# 3. Copie des fichiers de dépendances d'abord (optimisation du cache des layers Docker)
COPY package*.json ./

# 4. Installation des dépendances
RUN npm install

# 5. Copie du reste du code source
COPY . .

# 6. Exposition du port de développement (5173 par défaut)
EXPOSE 5173

# 7. Commande de lancement de l'application
CMD ["npm", "run", "dev"]
# Vite doit écouter sur 0.0.0.0 pour accepter les requêtes provenant de l'extérieur du conteneur
CMD ["npm", "run", "dev", "--", "--host"]