const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const moviesControllerApi = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: movies.lenght,
                        url: "api/movies"
                    }, 
                    data: movies
                })
            })
    },
    'create': (req, res) => {
        //return res.json(req.body)
        db.Movie
            .create(req.body)
            .then(movie => {
                return res.status(200).json({
                    data: movie,
                    status: 200,
                    created: 'ok'
                })
            })
            .catch(error => {
                console.log(error)
            })
    },
    'delete': (req, res) => {
        db.Movie
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                return res.json(response);
            });
    }, 
    'search': (req, res) => {
        db.Movie
            .findAll({
                where: {
                    title: { [Op.like]: '%' + req.query.keyword + '%'}
                }
            })
            .then(movies => {
                if (movies.length > 0) {
                    return res.status(200).json(movies)
                } else {
                    return res.status(400).json("No existen peliculas")
                }
            })
            .catch( err => console.log(err))
    }

}

module.exports = moviesControllerApi;