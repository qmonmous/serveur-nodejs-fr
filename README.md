# Node-Project

### Mise en en place
`mkdir node-project`

`cd node-project`

`npm init -y`

`npm i -s express dotenv ejs path body-parser d3`

 - **dotenv** : permet de déclarer des variables d'environnement
 - **ejs** : système de templating (moteur de rendu) pour les extensions type .html
 - **body-parser** : récupération des données des requêtes clients
 - **d3** : dataviz
 
`touch server.js`

`touch .env`

`touch .gitignore`

Après avoir configuré ces 3 fichiers, on peut lancer le serveur avec la commande `npm start` indiquée dans le package.json et y accéder avec localhost:9876, le port indiqué dans le .env. Si tout fonctionne, on obtient "Cannot GET /".

Dans node-project on crée :

`mkdir routes`

`cd routes` 

`mkdir d3`

`mkdir front`

`cd front`

`touch front.routes.js`

### Si git clone

Si ce repo est cloné, il suffit de lancer la commande `npm i` dans le directory pour réinstaller les packages présents dans le package.json et ainsi recréer le fichier node_modules.