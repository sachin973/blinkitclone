import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart";
import "./DetailPage.css";
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
export default function DetailPage({ item }) {
    const location = useLocation();
    const cartContextUse = useContext(CartContext);
    const { itemAdded, addItemCart, removeItemCart,handleItems } = cartContextUse;
    const { state } = location;
    const [selectedImage, setSelectedImage] = useState(state.images[0]);
    const handleImageClick = (image) => {
        setSelectedImage(image);
    }
    return (
        <div className="product-detail">
            <Grid container spacing={2}>
                <Grid size={6}>
                    <div className="product-detail-image">
                        <img className="large-img" src={selectedImage} alt="Product" />
                        <div className="w100 ">
                            <Grid container sx={{
                                justifyContent: "center",
                                alignItems: "center",
                            }} spacing={2} >
                                {state.images.length > 0 && state.images.map((image, i) => (
                                    <Grid size={2} key={i}>
                                        <div className="product-detail-small-image" onClick={() => handleImageClick(image)}>
                                            <img className="small-img" src={image} alt="Product" />
                                        </div>
                                    </Grid>
                                ))}


                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid size={6}>
                    <div className="detail-product-info">
                        <p className="detail-name">{state.title}</p>
                        <p className="detail-time">
                            8 MINS</p>

                        <div className="select-unit-div">
                            <div className="select-unit-cta">
                                <span>{state.weight}</span>
                                <span>MRP ₹{state.price}</span>
                            </div>

                        </div>
                        <p className="inclusive-tax-p">{`(Inclusive of all taxes)`}</p>
                        <div className="add-to-cart-button">
                            <span onClick={()=>{addItemCart();handleItems(state)}}>+</span>
                            <span>{itemAdded}</span>
                            <span onClick={()=>{removeItemCart();handleItems(state)}}>-</span>

                        </div>

                    </div>

                </Grid>
            </Grid>
        </div>


    );
}