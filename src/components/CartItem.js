import React from "react";
import QuantityAddRest from "./QuantityFunct"
import CartContext from "../contexts/CartContext";
import {useContext, useState, useEffect} from "react";
import ButtonFunct from "./Commons";

const CartItem = ({card}) => {

    const context = useContext(CartContext)

    const [cantidad, setCantidad] = useState(card.cantidad)

    const [total, setTotal] = useState (card.cantidad*card.precio)

    useEffect(() => {
        context.change_cant(card, cantidad)
        setTotal(card.cantidad*card.precio)
    },[cantidad])

    return (
        <div className={`row align-items-center border border-dark border-3 mx-5 my-3 ${card.colour}`}>
            <div className="col-2 d-flex justify-content-center">
                <img src={require(`../media/${card.img}`)} className="border ImgCart border-dark border-3 m-3" alt="..."></img>
            </div>
            <div className="col-2 d-inline align-middle text-center">
                <h3 className="align-middle">{card.nombre}</h3>
            </div>
            <div className="col-1 d-flex justify-content-center">
                <img src={require(`../media/${card.banner}`)} className="BannerCart m-3" alt="..."></img>
            </div>
            <div className="col-1 text-center">
                <h3>X</h3>
            </div>
            <QuantityAddRest getCantidad={(c) => setCantidad(c)} stockIni={card.stock} valorInicial={cantidad} clases={"col-1 text-dark fs-5"}/>
            <div className="col-1 text-success text-center ">
                <h3>$ {card.precio}</h3>
            </div>
            <div className="col-1 text-center">
                <h3>=</h3>
            </div>
            <div className="col-1 text-success text-center">
                <h3>$ {total}</h3>
            </div>
            <div className="col-1">
                <ButtonFunct nombre="X" funcion={() => context.remove(card.link)} type="button" clases="btn btn-danger border border-dark border-2"/>
            </div>
        </div>
    )
}

export default CartItem