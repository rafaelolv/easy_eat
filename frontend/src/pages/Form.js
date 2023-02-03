import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createRestaurante } from "../actions/restauranteAction";

import styleGlobal from '../style/Global.module.css';
import styleFormRestaurante from '../style/FormRest.module.css';


const Form = () => {

    const initialRestauranteState = {
        nome: "",
        unidade: "",
        // cardapio: null,
        pais: "",
        estado: "",
        cidade: "",
        cep: "",
        bairro: "",
        numero: ""
    }

    const [restaurante, setRestarante] = useState(initialRestauranteState);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
    
        setRestarante({ ...restaurante, [name]: value });
    };

    
    const salvarRestaurante = () => {
        
        // const { nome, descricao } = prato;

        dispatch(createRestaurante(restaurante))
        .then(data => {
            setRestarante({
                nome: '',
                unidade: '',
                pais: '',
                estado: '',
                cidade: '',
                cep: '',
                bairro: '',
                numero: ''
        });

            console.log("Restaurante " + data.nome + " foi adicionado");
        })
        .catch(e => {
            console.log(e);
        });
    }


    return (
        <div className={styleFormRestaurante.boxForm}>
            <div>
                <label>Nome: </label>
                <input type="text" id="nome" value={restaurante.nome} onChange={handleInputChange} placeholder='Nome' name="nome" />
            </div>
            <div>
                <label>Unidade: </label>
                <input type="text" id="unidade" value={restaurante.unidade} onChange={handleInputChange} placeholder='Unidade' name="unidade" />
            </div>
            {/* <InputImage handlerChangeImage={this.handlerChangeImage} /> */}
            <div>
                <label>País: </label>
                <input type="text" id="pais" value={restaurante.pais} onChange={handleInputChange} placeholder='País' name="pais" />
            </div>
            <div>
                <label>Estado: </label>
                <input type="text" id="estado" value={restaurante.estado} onChange={handleInputChange} placeholder='Estado' name="estado" />
            </div>
            <div>
                <label>Cidade: </label>
                <input type="text" id="cidade" value={restaurante.cidade} onChange={handleInputChange} placeholder='Cidade' name="cidade" />
            </div>
            <div>
                <label>CEP: </label>
                <input type="text" id="cep" value={restaurante.cep} onChange={handleInputChange} placeholder='CEP' name="cep" />
            </div>
            <div>
                <label>Bairro: </label>
                <input type="text" id="bairro" value={restaurante.bairro} onChange={handleInputChange} placeholder='Bairro' name="bairro" />
            </div>
            <div>
                <label>Número: </label>
                <input type="text" id="numero" value={restaurante.numero} onChange={handleInputChange} placeholder='Número' name="numero" />
            </div>
            
            <button type="submit" onClick={salvarRestaurante} >
                Cadastrar
            </button>
        </div>
    )

}

export default Form;