import React, { useState } from "react";
import { Routes as Router, Route } from 'react-router-dom';

import { UserType } from "../types/User";
import { UserContext } from "../contexts/user";

import Login from '../pages/Login';
import Home from "../pages/Home";
import Insumos from "../pages/Insumos";
import Massas from "../pages/Products";

const Routes: React.FC = () => {
    const [user, setUser] = useState<UserType>();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Route path="/cem-controle-estoque/" element={<Login /> }/>
                <Route path="/cem-controle-estoque/home" element={<Home />} />
                <Route path="/cem-controle-estoque/insumos" element={<Insumos />} />
                <Route path="/cem-controle-estoque/massas" element={<Massas />} />
            </Router>
        </UserContext.Provider>
    )
}

export default Routes;