/* Import des modules */
//Node.js
require('dotenv').config(); //On va chercher toutes les variables d'environnement déclarées dans .env
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

//Inner
const FrontRouterClass = require('./routes/front/front.routes') //pas de .js
/**/

/* Configuration */
const server = express();
const port = process.env.PORT; //permet de stocker les tokens en dehors du server.js (sécurité)

class ServerClass {
    init(){
        //Client folder
        server.set('views', __dirname + '/www');
        server.use( express.static(path.join(__dirname, 'www')) );
        
        //View engine
        server.engine('html', ejs.renderFile);
        server.set('view engine', 'html');

        //Body-parser
        server.use( bodyParser.json({lim: '10mb'}) );
        server.use( bodyParser.urlencoded({extended: true}) );

        //Routers
        const frontRouter = new FrontRouterClass();
        server.use('/', frontRouter.init());

        //Start server
        this.launch();
    };

    launch(){
        server.listen( port, () => { //fonction flechée en ES6
            console.log(`Server listening on port ${port}`);
        });
    };
};

/* Lancement du serveur */
new ServerClass().init();