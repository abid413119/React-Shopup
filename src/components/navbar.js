import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';
import styled from 'styled-components';


class Navbar extends Component {

    render () {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <h3 className="navbar-brand mb-0">Shopup</h3>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2"> 
                            <i className="fa fa-cart-plus"></i>
                        </span>
                        MyCart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
export default Navbar;

const NavWrapper = styled.nav`
    background: var(--mainBlue)!important;
    color: var(--mainWhite);
    font-size: 1.3rem;
`;