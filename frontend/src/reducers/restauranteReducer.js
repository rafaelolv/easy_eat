import { CREATE_RESTAURANTE, LIST_RESTAURANTES } from './../actions/actionTypes/restauranteActionType';


const initialState = {
    restaurantes: [],
};


function restauranteReducer(state = initialState, action) {

    switch (action.type) {
        case CREATE_RESTAURANTE:
            console.log("Chegou aqui CREATE_RESTAURANTE ? -----")
            return {
                ...state,
                restaurantes: [...state.restaurantes, action.payload]
            }
            // return [...state, payload];

        case LIST_RESTAURANTES:
            console.log("Chegou 6! reducer");
            return {
                ...state,
                restaurantes: [...action.payload]
                // ...state, list: action.payload.data "como esta lá no udemy, testar amanha (03/10) aula 177"
            }

        default:
            return state;
    }
};

export default restauranteReducer;