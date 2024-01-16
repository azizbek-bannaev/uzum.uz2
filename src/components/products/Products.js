import React from 'react';
import "./Products.css";
import { IoHeartOutline, IoHeart, IoCartOutline } from  "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'; // Fixed typo in 'UseDispatch'
import { addToWishes, removeFromWishes } from "../../context/wishesSlice";

function Products({ title, data }) {
    const dispatch = useDispatch(); // Fixed typo in 'dispath'
    const wishes = useSelector((s) => s.wishes.value);
    return (
        <div className='container'>
            <div className="products">
                <h2>{title}</h2>
                <div className="products__wrapper">
                    {data?.map((el) => (
                        <div key={el.id} className="product__card">
                            <div className='product__image'>
                                <Link to={`/product/${el.id}`}>
                                    <img src={el.url[0]} alt="" />
                                </Link>
                            </div>
                            <p className='product__title'>{el.title}</p>
                            <mark className='product__monthly'>1500 so'm/oyiga</mark>
                            <br />
                            <br />
                            <del className='product__old-price'>1500 so'm</del>
                            <b className='product__price'>{el.price?.brm()} so'm</b>
                            {wishes?.some((liked) => liked.id === el.id) ? (
                                <div
                                onClick={() => dispatch(removeFromWishes(el))} // Fixed typo in 'dispath'
                                className="product__heart liked"
                            >
                                <IoHeart />
                            </div> 
                            ) : (
                                <div
                                onClick={() => dispatch(addToWishes(el))} // Fixed typo in 'dispath'
                                className="product__heart"
                            >
                                <IoHeartOutline />
                            </div> 
                            ) }
                           
                            <div className="product__cart">
                                <IoCartOutline />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
