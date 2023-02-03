const Restaurante = require("../models/restauranteModel.js");

exports.create = (req, res, next) => {
    console.log(">>> aqui controller ?");
    if(!req.body.nome) {
        console.log("ENtrou aqui? controler create teste" + req.body.nome + req.data)
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //Create a package
    const restaurante = new Restaurante({
        id_restaurante: req.body.id_restaurante,
        nome: req.body.nome,
        unidade: req.body.unidade,
        // cardapio: req.body.cardapio,
        pais: req.body.pais,
        estado: req.body.estado,
        cidade: req.body.cidade,
        cep: req.body.cep,
        bairro: req.body.bairro,
        numero: req.body.numero,
    });

    Restaurante.create(restaurante)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the package."
            });
        });
};

// exports.findAll = (req, res) => {
//     Pacote.findAll()
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//               message:
//                 err.message || "Some error occurred while retrieving users."
//             });
//         });
// };