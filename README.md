website_Project

#Installez les dépendances avec
$ npm i

# ajout d'un fichier .sqlite pour stocker notre base de données
$ touch ./src/db/db.sqlite

# Ou sur windows :
$ type nul > ./src/db/db.sqlite


# on définit la variable DB_PATH à l'endroit où se situe notre fichier .sqlite
$ echo "DB_PATH=./src/db/db.sqlite" > .env

# lance en mode "prod"
$ npm run start

# il est aussi possible de le lancer via nodemon
$ npm run watch