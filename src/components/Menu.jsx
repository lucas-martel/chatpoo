import React from 'react';
import SideMenu from './SideMenu'
import SearchBar from './SearchBar';
import './Menu.css'

function Menu() {
    return (
        <div className="menu-container">
            <SideMenu />
            <div id="title-name">CHAT POO</div>
            <SearchBar />
        </div>
    )
}

export default Menu;