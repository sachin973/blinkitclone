import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { IoMdClose } from "react-icons/io";

export default function Cart() {
    const cartContextUse = useContext(CartContext);
    const { itemAdded, cartItems } = cartContextUse;
  
    return (
        <>
            <div className="cart">
                <div className="dflex justify-between justify-center cart-first-row">
                    <p>My Cart</p>
                    <IoMdClose />
                </div>
                <div className="dflex justify-between justify-center cart-second-row">
                    <div className="cart-time-div">
                        <img src={cartItems.thumbnail} alt="clock" />
                        <div className="cart-time-info">
                            <p className="time-p">Delivery in 8 minutes</p>
                            <p className="qty-p">Shipment of {itemAdded} item</p>
                        </div>
                    </div>
                </div>
                <div className="dflex justify-between justify-center cart-third-row">

                    <div className="billing-details">
                        <p className="time-p">Billing Details</p>
                        <div className="w100 dflex justify-between justify-center billing-details-row">
                            <p className="qty-p">Item Total</p>
                            <p className="qty-p">₹ {cartItems.price * itemAdded}</p>
                        </div>
                        <div className="w100 dflex justify-between justify-center billing-details-row">
                            <p className="qty-p">Delivery Charges</p>
                            <p className="qty-p">₹ 0</p>
                        </div>
                        <div className="w100 dflex justify-between justify-center billing-details-row">
                            <p className="qty-p">Total Amount</p>
                            <p className="qty-p">₹ {cartItems.price * itemAdded}</p>
                        </div>
                    </div>
                </div>
                <div className=" cart-first-row text-left">
                    <p className="time-p">Billing Details</p>
                    <p className="qty-p">Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
                    </p>
                </div>
                <button className="place-order"><span>₹{cartItems.price * itemAdded}<br />Total</span><span>Place Order</span></button>
            </div>
        </>
    );
}
