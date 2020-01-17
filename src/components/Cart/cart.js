import React, { Component } from 'react';
import Title from '../title';
import CartColumns from "./CartColumns";
import EmptyCart from "./emptyCart";
import {ProductConsumer} from "./../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';


class Cart extends Component {

    render () {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="Cart" />
                                    <br></br>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <hr></hr>
                                    <CartTotals value={value} />
                                </React.Fragment>
                            )
                        }
                        else{
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
export default Cart;