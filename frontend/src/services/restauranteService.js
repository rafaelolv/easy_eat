import http from "../http-common";

const create = data => {
    console.log(">>> aqui service?" + data);
    return http.post("/restaurantes", data);
};

// const getAll = () => {
//     return http.get("/pratos");
// };

// const get = id => {
//     return http.get(`/pratos/${id}`);
// };

// const update = (id, data) => {
//     return http.put(`/pratos/${id}`, data);
// };

// const remove = id => {
//     return http.delete(`/pratos/${id}`);
// };

// const removeAll = () => {
//     return http.delete(`/pratos`);
// };

// const findByName = nome => {
//     return http.get(`/pratos?nome=${nome}`);
// };

const restauranteService = {
    // getAll,
    // get,
    create
    // update,
    // remove,
    // removeAll,
    // findByName
};

export default restauranteService;