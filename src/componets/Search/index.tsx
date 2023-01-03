import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import { IProduct } from '../../models/Product';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { useAppDispatch } from '../../hooks/redux';

function Search() {
    const { setProducts } = searchSlice.actions;
    const dispatch = useAppDispatch();

    const [ value, setValue ] = useState('');

    const fetchProducts = async () => {
        const { data } = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
        dispatch(setProducts(data));
    }

    useEffect(() => {
        fetchProducts();
    }, [value]);

    return (
        <div className="search-box">
            <input 
                className="text__field" 
                type="text" 
                placeholder="I'm searching..." 
                onChange={({ target }) => setValue(target.value)}
            />
        </div>
    )
}

export default Search;