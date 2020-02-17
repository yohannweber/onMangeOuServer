const Joi = require('@hapi/joi');

class Restaurants {

    constructor(expressApp) {


        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            descr: Joi.string().min(3).max(30).required(),
            type: Joi.string().min(3).max(10).required(),
        });

        let restaurants = [
            {
                id: -1,
                name: "Pas disponible",
                type: "NC",
                descr: "Pas là ce midi",
                persons: [
                ]
            },
            {
                id: 1,
                name: "Pink Mama",
                type: "Italien",
                descr: "De la viande maturée",
                persons: [
                    { 
                    "id": "1",
                    "name" : "Lionel",
                    "comment": "pas de retard"
                    },

                    { 
                    "id": "2",
                    "name" : "Laurent",
                    "comment": "J'ai la dalle ! Rdv à 12h."  
                    },
                    { 
                    "id": "11",
                    "name" : "Lionelito",
                    "comment": "pas de retard"
                    },

                    { 
                    "id": "12",
                    "name" : "Laurentia",
                    "comment": "J'ai la dalle ! Rdv à 12h."  
                    },
                    { 
                    "id": "13",
                    "name" : "Lionel",
                    "comment": "pas"
                    },

                    { 
                    "id": "14",
                    "name" : "Laurent",
                    "comment": ""  
                    }
                ]
            },
            {
                id: 2,
                name: 'Le petit T',
                type: 'Thaï',
                descr: 'Des super bobuns pour - de 8€',
                persons: [
                    { 
                    "id": "3",
                    "name" : "Bernard",
                    "comment": "J'adore le homard !"
                    },
                    { 
                    "id": "4",
                    "name" : "Maurice",
                    "comment": "On va s'en mettre plein le bide"  
                    }]
            },
            {
                id: 3,
                name: 'Gallo rosso',
                type: 'Pizzeria',
                descr: 'Pizza au feu de bois',
                persons: [
                    { 
                    "id": "5",
                    "name" : "Jean-Jacques",
                    "comment": "Toujours prêt pour une bonne pizza"
                    },
                    { 
                    "id": "6",
                    "name" : "Hervé",
                    "comment": "J'ai la dalle ! Rdv à 12h."  
                    }
                ]
            },
            {
                id: 4,
                name: 'Flesh',
                type: 'Argentin',
                descr: 'De la viande !',
                persons: [
                    { 
                    "id": "7",
                    "name" : "Charles",
                    "comment": "Une entrecôte argentine !"
                    },
                    { 
                    "id": "8",
                    "name" : "Morgane",
                    "comment": "J'aime la viande !!"  
                    }
                ]
            },
            {
                id: 5,
                name: 'PNY',
                type: 'Burgers',
                descr: 'Des burgers en veux-tu ? En voilà !',
                persons: [
                    { 
                    "id": "9",
                    "name" : "Noname",
                    "comment": "pas de retard"
                    }
                ]
            }
        ];
        //let restaurants = [];

        expressApp.get('/api/restaurants', (req, resp) => {
            resp.send(restaurants);
        });

        expressApp.get('/api/restaurants/:id', (req, resp) => {
            const restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
            if (!restaurant) return resp.status(404).send('The restaurant does not exist!');
            resp.send(restaurant);
        });

        expressApp.post('/api/restaurants', (req, resp) => {

            /*const result = Joi.validate(req.body, schema, (error, value) => {
                resp.status('404').send(error);
            })*/
            schema.validate(req.body);
            const restaurant = {
                id: restaurants.length + 1,
                name: req.body.name,
                type: req.body.type,
                descr: req.body.descr,
                persons: req.body.persons
            };

            restaurants.push(restaurant);
            resp.send(restaurant);
        });

        expressApp.delete('/api/restaurants/:id', (req, resp) => {
            const restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
            if (!restaurant) return resp.status(404).send('The restaurant does not exist!');

            const index = restaurants.indexOf(restaurant);
            restaurants.splice(index, 1);
            resp.send(restaurant);
        });

        
        /*expressApp.get('/api/surveys', (req, resp) => {
            resp.send(surveys);
        });*/

        expressApp.get('/api/surveys/:id', (req, resp) => {
            const persons = restaurants.find(c => c.id === parseInt(req.params.id)).persons;
            if (!persons) return resp.status(404).send('The survey does not exist!');
            resp.send(persons);
        });

        expressApp.get('/api/surveys/:id', (req, resp) => {
            const persons = restaurants.find(c => c.id === parseInt(req.params.id)).persons;
            if (!persons) return resp.status(404).send('The survey does not exist!');
            resp.send(persons);
        });

        expressApp.get('/api/surveys/:id/restaurant', (req, resp) => {
            const restaurant = restaurants.find(c => c.persons.find( p => p.id === req.params.id));
            if (!restaurant) return resp.status(404).send('The user does not exist!');
            resp.send(restaurant);
        });

        expressApp.post('/api/restaurants/:restaurantId/surveys/', (req, resp) => {

            /*const result = Joi.validate(req.body, schema, (error, value) => {
                resp.status('404').send(error);
            })*/
            for(let i = 0; i < restaurants.length ; i++){
                restaurants[i].persons = restaurants[i].persons.filter( p => { return p.id !== req.body.id } );
            }

            let persons = restaurants.find(c=> c.id === parseInt(req.params.restaurantId)).persons;
            const person = {
                id: req.body.id,
                name : req.body.name,
                comment: req.body.comment
            };
            persons.push(person);
            resp.send(person);
        });

        /*expressApp.delete('/api/surveys/:id', (req, resp) => {
            const survey = surveys.find(c => c.id === parseInt(req.params.id));
            if (!survey) return resp.status(404).send('The survey does not exist!');

            const index = surveys.indexOf(survey);
            surveys.splice( index, 1);
            resp.send(survey);
        });*/
    
    }
};

module.exports = Restaurants;