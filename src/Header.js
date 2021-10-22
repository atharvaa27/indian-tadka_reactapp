import React from 'react'
import './Header.css'
import logo from './img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo" src={logo} />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>About</span>
                    <span className='header__optionLineTwo'>Us</span>
                </div>
                <Link to="/Checkout">
                <div className="header__optionBasket">
                    <RestaurantIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Header
