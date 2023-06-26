import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Wrapper} from "./Navigation.style";


const Navigation = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Navigation;