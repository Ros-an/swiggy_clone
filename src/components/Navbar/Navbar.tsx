import React from 'react';
import { Cart, Help, Offer, Search, User } from '../../assets/svg';
import MemoSwiggyLogo from '../../assets/svg/SwiggyLogo';
import "./style.css";

// export interface NavbarProps {

// }
function Navbar() {
  return (
    <nav className='navbar swiggy-width'>
        <div className="navbar__left">
            <MemoSwiggyLogo className="logo"/>
        </div>
        <div className="navbar__right space-between">
            <div className="right__item">
            <Search />
                <span>Search</span>
            </div>
            <div className="right__item">
            <Offer />
                <span>Offers</span>
            </div>
            <div className="right__item">
            <Help/>
                <span>Help</span>
            </div>
            <div className="right__item">
            <User/>
                <span>Sign In</span>
            </div>
            <div className="right__item">
            <Cart />
                <span>Cart</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar