//Import et configuration
const express = require('express');
const frontRouter = express.Router();

//Définition
class FrontRouterClass{
    constructor(){ //pour injecter des données dans la classe
    
    };
    
    routes(){
        frontRouter.get('/', (req, res) => { //requête en GET pour récupérer des données
            res.render('index'); //pas besoin du .html car notre View Engine (dans server.js) le crée
        });

        frontRouter.get('/convert', (req, res) => { //on crée une nouvelle route pour chaque page
            res.render('convert');
        });
    };

    init(){
        this.routes();
        return frontRouter;
    };
};

//Export de la classe
module.exports = FrontRouterClass;