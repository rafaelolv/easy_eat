import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import Main from './pages/Main';


export default props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
};