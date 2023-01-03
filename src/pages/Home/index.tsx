import React, { useEffect }  from 'react';
import axios from 'axios';

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

    const fetchProducts = async () => {
        const { data } = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10');
        console.log(data);
        
        dispatch(setProducts(data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className="home">
            <div className="container home__container">
                <div className="home__card-list">
                    {
                        products.map((product) => <Card product={product} key={product.id}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Home;