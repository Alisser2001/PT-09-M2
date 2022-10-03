import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from '../styles/Nav.module.css';

function Nav({onSearch}) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt='Logo Henry' />
                <p>Henry WeatherApp</p>
            </div>
            <SearchBar onSearch={onSearch}/>
        </header>
    );
};

export default Nav;