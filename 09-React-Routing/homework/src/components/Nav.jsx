import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav({onSearch}) {
    return (
        <nav className='header'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className='logo'>
                    <img id='LogoHenry' src={Logo} alt='Logo Henry' width='30' height='30' />
                    <p>Henry WeatherApp</p>
                </div>
            </Link>
            <SearchBar onSearch={onSearch}/>
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <h1 className='aboutNav'>About</h1>
            </Link>
        </nav>
    );
};

export default Nav;
