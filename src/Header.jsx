import React from 'react'
import "./Header.css"
import  { ExpandMore } from "@material-ui/icons"
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__icon"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt=""
            />
            </Link>
            
            <div className="header__center">
                <input type="text" placeholder="Start your search" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
