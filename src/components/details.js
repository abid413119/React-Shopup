import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';


class Details extends Component {

    render () {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid"  alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize card p-3">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-uppercase text-muted text-title">Made By: <span>{company}</span></h4>
                                    <h5 className="text-blue">
                                        <strong>Price: <span>$</span>{price}</strong>
                                    </h5>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product Description:
                                    </p>
                                    <p className="text-muted">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back To Home</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            cart
                                            disabled={inCart? true: false} 
                                            onClick={()=> {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                            className="ml-2"
                                        >
                                            {inCart? "In Cart" : "Add To Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
export default Details;