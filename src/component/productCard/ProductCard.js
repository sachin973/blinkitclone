import "./ProductCard.css";
import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ item }) {
    const cartContextUse = useContext(CartContext);
    const { itemAdded, addItemCart, removeItemCart, handleItems } = cartContextUse;
    const navigate = useNavigate();
    return (
        <div className="product-card" onClick={() => navigate('/details', { state: item })}>
            <div className="product-card-image">
                <img src={item.thumbnail} alt="Product" />
            </div>
            <div className="product-card-details">
                <p className="name">{item.title}</p>
                <p className="quantity">{item.weight}</p>

            </div>
            <div className="dflex cta-div">
                <p>₹{item.price}</p>
                <button className="add-to-cart" > 
                    <span onClick={() => { addItemCart(); handleItems(item) }}>+</span>
                  <span>{itemAdded}</span>
                    <span onClick={() => { removeItemCart(); handleItems(item) }}>-</span></button>
            </div>

        </div>


    );
}
