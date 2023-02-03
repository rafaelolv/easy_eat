import { CREATE_RESTAURANTE } from './actionTypes/restauranteActionType';
import restauranteService from '../services/restauranteService';


export const createRestaurante = (restaurante) => async (dispatch) => {
    try {
        console.log(">>> aqui action?");
        const res = await restauranteService.create(restaurante);
        
        dispatch({
            type: CREATE_RESTAURANTE,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

