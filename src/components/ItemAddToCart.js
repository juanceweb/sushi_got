import React, {useEffect, useState, useContext} from "react";
import CartContext from "../contexts/CartContext";
import ButtonFunct from "./Commons";
import QuantityAddRest from "./QuantityFunct"



const AddToCart = ({stockBase, price, card}) => {

    const [cantidad, setCantidad] = useState(1)

    const [stock, setStock] = useState(stockBase)

    const context = useContext(CartContext)

    // const add = () => {
    //     (cantidad < stock ) ? setCantidad((prev) => prev + 1) : console.log("stock max");
    // }

    // const rest = () => {
    //     (cantidad > 1 ) ? setCantidad((prev) => prev - 1) : console.log("stock min");
    // }

    return (
        <div className="container-fluid cartAdder">
            <div className="row">
                <div className="col-2 d-flex">
                    <p className="text-white m-auto">PRICE</p>
                </div>
                <div className="col-2 d-flex">
                    <p className="text-white m-auto">$ {price}</p>
                </div>
                <div className="col-2 d-flex">
                    <p className="text-white m-auto">QUANTITY</p>
                </div>
                <QuantityAddRest getCantidad={(c) => setCantidad(c)} stockIni={stock} clases={"col-2"}/>
                <div className="col-4 d-flex">
                    <ButtonFunct funcion={() => context.add(card, cantidad)} clases={"btn btn-secondary m-3 border-dark border-2"} nombre={"AGREGAR AL CARRITO"}/>
                </div>
            </div> 
        </div> 
    );
    }

export default AddToCart
