const Joi = require('@hapi/joi');
class Surveys{
    constructor(expressApp){
        const schema = {
            name: Joi.string().min(2).required(),
            restaurantId: Joi.number().required(),
            comment: Joi.string(), 
        };
    
            const surveys = [
                { name: 'Yohann', restaurantId : 1, comment: 'Je serai dispo à 12h10' },
                { name: 'Lionel', restaurantId : 1, comment: 'Cool' },
                { name: 'Laurent', restaurantId : -1, comment: 'Je ne mange pas avec vous aujourdhui' }
            ];
    /*
            expressApp.get('/api/surveys', (req, resp) => {
                resp.send(surveys);
            });
    
            expressApp.get('/api/surveys/:id', (req, resp) => {
                const survey = surveys.filter(c => c.restaurantId === parseInt(req.params.id));
                if (!survey) return resp.status(404).send('The survey does not exist!');
                resp.send(survey);
            });
    
            expressApp.post('/api/surveys', (req, resp) => {
    
                const result = Joi.validate(req.body, schema, (error, value) => {
                    resp.status('404').send(error);
                })
                const survey = {
                    id: surveys.length + 1,
                    name : req.body.name,
                    restaurantId : req.body.restaurantId,
                    comment: req.body.comment
                };
            
                surveys.push(survey);
                resp.send(survey);
            });
    
            expressApp.delete('/api/surveys/:id', (req, resp) => {
                const survey = surveys.find(c => c.id === parseInt(req.params.id));
                if (!survey) return resp.status(404).send('The survey does not exist!');
    
                const index = surveys.indexOf(survey);
                surveys.splice( index, 1);
                resp.send(survey);
            });*/
        }

    };


module.exports = Surveys;