import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Form from './pages/Form';


export default props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Main />} />
                <Route exact path={"/form"} element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
};