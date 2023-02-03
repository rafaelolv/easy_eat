module.exports = app => {
    const restauranteController = require("../controllers/restauranteController.js");
    var router = require("express").Router();
    console.log(">>> aqui routers?");
    router.post("/", restauranteController.create);
    
    // router.get("/", pratos.findAll);
    
    // router.get("/disponivel", pratos.findAllDisponiveis);
    
    // router.get("/:id", pratos.findOne);
    
    // router.put("/:id", pratos.update);
    
    // router.delete("/:id", pratos.delete);
    
    // router.delete("/", pratos.deleteAll);

    app.use('/easyeat/restaurantes', router);
};