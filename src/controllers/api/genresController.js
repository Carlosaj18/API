const db = require('../../database/models');
const sequelize = db.sequelize;


const genresControllerApi = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: genres.lenght,
                        url: "api/genres"
                    }, 
                    data: genres
                })
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.status(200).json({
                    data: genre,
                    status: 200
                })
            });
    }

}

module.exports = genresControllerApi;