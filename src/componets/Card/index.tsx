import React from 'react';
import './index.scss';

import { IProduct } from '../../models/Product';

interface Props {
    product: IProduct
}

function Card({ product }: Props) {
    return (
        <div className="card">
            <div className="card__img-box">
                <img className="card__img" src={product.image} alt="" />
            </div>
            <div className="card__content">
                <div className="card__title">
                    <a href="#">{product.title}</a>
                </div>
                <span className="card__price">{ product.price } $</span>
            </div>
        </div>
    )
}

export default Card;