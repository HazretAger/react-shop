import React, { useEffect, useState }  from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios';

import Slider from "../../componets/Slider";
import Card from '../../componets/Card';
import { IProduct } from '../../models/Product';

import { searchSlice } from '../../store/reducers/SearchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import '../../index.css';
import './index.scss';

function Home() {

    const { products } = useAppSelector(state => state.searchReducer);
    const { setProducts } = searchSlice.actions;
    const dispatch = useAppDispatch();

    const [ isLoading, setIsLoading ] = useState(true);

    const fetchProducts = async () => {
        const { data } = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10');
        dispatch(setProducts(data));
    }

    useEffect(() => {
        fetchProducts();
        setIsLoading(false);
    }, []);

    return (
        <section className="home">
            <div className="container home__container">
                <div className="home__swiper-container">
                    <Slider />
                </div>
                <div className="home__card-list">
                    {
                        isLoading ? <Skeleton /> : products.map((product) => <Card product={product} key={product.id}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Home;