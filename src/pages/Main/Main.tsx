import React, { useEffect } from 'react';
import { useGetProductsByCategoryQuery } from '../../services/ProductApi';
import { useAppSelector } from '../../hooks/redux';

import Slider from "../../componets/Slider/Slider";
import Card from '../../componets/Card/Card';
import { Skeleton } from '../../componets/Skeleton/Skeleton';
import { IProduct } from '../../types/Product';

import '../../index.css';
import './Main.scss';

function Main() {
    const { category } = useAppSelector(state => state.productSlice);
    const { data = [], isLoading } = useGetProductsByCategoryQuery(category);

    console.log(category);

    return (
        <section className="home">
            <div className="container home__container">
                <div className="home__swiper-container">
                    <Slider />
                </div>
                <div className="home__card-list">
                    {
                        isLoading ? [... new Array(6)].map(() => <Skeleton />) :
                        data.map((product: IProduct) => <Card product={product} key={product.id}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Main;