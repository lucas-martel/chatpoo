import React from 'react';
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './SearchBar.css'

function handleClickSearch(searchIsOpen){
    let searchBtn = document.querySelector(`[data-button="search"]`);
    let searchContainer = document.querySelector('.search-bar-container')
    searchBtn.style.display = searchIsOpen ? 'none' : 'block';
    searchContainer.style.display = searchIsOpen ? 'flex' : 'none';
}

function clearSearch(){
    document.getElementById("search-area").value = ''
}

function SearchBar(){
    let searchIsOpen = false;
    return (
        <>
            <BiSearchAlt
                    onClick={
                        ()=>{
                            searchIsOpen = !searchIsOpen
                            handleClickSearch(searchIsOpen)
                        }
                    }
                    data-button="search"
                    className='search-bar-icon image-icon'/>
            <div className="search-bar-container">
                <input 
                    type="text" 
                    id="search-area" 
                    autoComplete='off'
                    placeholder='Pesquisar...'
                    />
                <AiOutlineCloseCircle
                    onClick={
                        ()=>{
                            searchIsOpen = !searchIsOpen
                            handleClickSearch(searchIsOpen)
                            clearSearch()
                        }
                    }
                    data-button="close"
                    className='close-search image-icon'/>
            </div>
        </>
    )
}

export default SearchBar;