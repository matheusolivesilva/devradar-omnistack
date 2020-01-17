const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,, lagitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        console.log(request.query);
        return response.json({devs});
    }
}