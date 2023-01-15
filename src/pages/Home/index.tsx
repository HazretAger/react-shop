import React from 'react';
import { useGetProductsByCategoryQuery } from '../../services/ProductApi';
import { useAppSelector } from '../../hooks/redux';

import Slider from "../../componets/Slider";
import { Skeleton } from '../../componets/Skeleton';
import Card from '../../componets/Card';
import { IProduct } from '../../types/Product';

import '../../index.css';
import './index.scss';

function Home() {
    const { category } = useAppSelector(state => state.productSlice);
    const { data = [], isLoading } = useGetProductsByCategoryQuery(category);
    

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

export default Home;