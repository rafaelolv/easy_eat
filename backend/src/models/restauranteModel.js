const sql = require("../config/db.js");


constructor
const Restaurante = function(restaurante) {
    this.id_restaurante = null;
    this.nome = restaurante.nome;

    this.unidade = {
        id_unidade: null,
        id_restaurante: null,
        unidade: restaurante.unidade, 
    }
    this.cardapio = {
        id_cardapio: null,
        id_unidade: null,
        // cardapio: cardapio,
    }
    this.localizacao = {
        id_localizacao: null,
        id_unidade: null,
        pais: restaurante.pais,
        estado: restaurante.estado,
        cidade: restaurante.cidade,
        cep: restaurante.cep,
        bairro: restaurante.bairro,
        numero: restaurante.numero,
    }
};


// 
Restaurante.create = (newRestaurante) => {

    return new Promise (async (resolve, reject) => {
        try {
            const querySalvarRestaurante = 'INSERT INTO restaurante SET ?';
            const { id_restaurante, nome } = newRestaurante;
            const resultRestaurante = await executeQuery(sql, querySalvarRestaurante, { id_restaurante, nome });
            const dataRestaurante = {...resultRestaurante, id_restaurante: resultRestaurante.insertId};

            const querySalvarUnidade = 'INSERT INTO unidade SET ?';
            const { id_unidade, unidade } = newRestaurante.unidade;
            const resultUnidade = await executeQuery(sql, querySalvarUnidade, { id_unidade, id_restaurante: dataRestaurante.id_restaurante, unidade });
            const dataUnidade = {...resultUnidade, id_unidade: resultRestaurante.insertId};

            const querySalvarCardapio = 'INSERT INTO cardapio SET ?';
            const { id_cardapio } = newRestaurante.cardapio;
            const resultCardapio = await executeQuery(sql, querySalvarCardapio, { id_cardapio, id_unidade: dataUnidade.id_unidade });
            const dataCardapio = {...resultCardapio, id_cardapio: resultCardapio.insertId};

            const querySalvarLocalizacao = 'INSERT INTO localizacao SET ?';
            const { id_localizacao, pais, estado, cidade, cep, bairro, numero} = newRestaurante.localizacao;
            const resultLocalizacao = await executeQuery(sql, querySalvarLocalizacao, { id_localizacao, id_unidade: dataUnidade.id_unidade, pais, estado, cidade, cep, bairro, numero });
            const dataLocalizacao = {...resultLocalizacao, id_localizacao: resultLocalizacao.insertId};

            const data = {restaurante: {...dataRestaurante,  ...dataUnidade, ...dataCardapio, ...dataLocalizacao}};

            resolve(data);

        } catch (err) {
            reject(err);
        }
    });
}


// 
const executeQuery = async (con, query, params) => {
    return new Promise ((resolve, reject) => {
        con.query(query, params, (err, res) => {
            if(err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
}


module.exports = Restaurante;