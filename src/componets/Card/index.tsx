import React from 'react';
import { IProduct } from '../../models/Product';
import './index.scss';

interface ProductProps {
    product: IProduct
}

function Card({ product }: ProductProps) {

    return (
        <div className="card__wrap">
            <div className="card__item">
                <div className="card__img-box">
                    <img className="card__img" src={product.image} />
                </div>
                <div className="card__buttons">
                    <a href="" className="card__button">В корзину</a>
                </div>
            </div>
            <div className="card__title">
                <a href="#">Маленькое черное платье</a>
                <span className="card__price">₽ 1999</span>
            </div>
        </div>
    )
};

export default Card;