import React from 'react';
import { Link } from 'react-router-dom';
import { productSlice } from '../../store/reducers/ProductSlice';
import { useAppDispatch } from '../../hooks/redux';

import './SideBar.scss';

function SideBar() {
    const dispatch = useAppDispatch();
    const { setCategory } = productSlice.actions;

    const categories = ['Главная', 'Электроника', 'Мужская одежда', 'Женская одежда', 'Украшения'];

    const getByCategory = (event: any): any => {
        switch (event.target.innerText) {
            case 'Главная': {
                dispatch(setCategory("allProducts"));
                break;
            }
            case 'Электроника': {
                dispatch(setCategory("electronics"));
                break;
            }
            case 'Мужская одежда': {
                dispatch(setCategory("men's clothing"));
                break;
            }
            case 'Женская одежда': {
                dispatch(setCategory("women's clothing"));
                break;
            }
            case 'Украшения': {
                dispatch(setCategory("jewelery"));
                break;
            }
        };
    };
    

    return (
        <div className="sidebar">
            <input id="sidebar__toggle" type="checkbox" />
            <label className="sidebar__btn" htmlFor="sidebar__toggle">
                <span></span>
            </label>
            <ul className="sidebar__box">
                {
                    categories.map((item: string, index: number): any => {
                        return (
                            <li onClick={getByCategory} key={index}>
                                <Link className="sidebar__item" to="/">{item}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
};

export default SideBar;