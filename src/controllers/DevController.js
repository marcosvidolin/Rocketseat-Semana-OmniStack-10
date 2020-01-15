const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArrays');

// index = mostrar lista de resource
// show = mostrar um unico resource
// store = criar 
// update = alterar
// destroy = deletar

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    }, 

    async store(req, res) {

        const {
            github_username,
            techs,
            latitude,
            longitude
        } = req.body;

        let dev = await Dev.findOne({
            github_username
        });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const {
                name = login, avatar_url, bio
            } = apiResponse.data;

            console.log(name, avatar_url, bio, github_username, latitude, longitude);

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            // usado short syntax, o nome da propriedade é o mesmo da variavel
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return res.json(dev);
    }
};