import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

function Nav() {
    return (
        
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Acerca De</Link>
                </li>
                <li>
                    <Link to="/events">Eventos</Link>
                </li>
                <li>
                    <Link to="/donations">Donaciones</Link>
                </li>
            </ul>
        </nav>
        
    );
}

export default Nav;