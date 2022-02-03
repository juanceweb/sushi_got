import React from "react";
import CartContext from "../contexts/CartContext";
import {useContext, useState, useEffect} from "react";
import ButtonFunct from "./Commons";
import { NavLink } from "react-router-dom";
import NavBar from './NavBar';
import CartItem from "./CartItem"
import GotLogo from "../media/logo_got.jpg";
import { addDoc, getDoc, doc, collection, getFirestore, where, query, updateDoc } from "firebase/firestore";



const CartBody = () => {

    const context = useContext(CartContext)
    const {arr} = useContext(CartContext)

    const [loading, setLoading] = useState(false)

    const db = getFirestore();


    // function cart_close(cards) {
    //     for (const card of cards) {

    //         const data = doc (db, "Cards", card.id)

    //         getDoc(data).then((snapshot)=>{
    //             let stock = snapshot.data().stock

    //             let new_stock = stock - card.cantidad

    //             updateDoc(data, {stock: new_stock})
    //         })
    //     }
    //     context.wype()
    // }

    // async function cart_final (cards){
    //     let response = check_stocks(cards)
    //     console.log(response)
    //     if (response) {
    //         cart_close(cards)
    //     }
    //     else {
    //         console.log("response era false");
    //     }
    // }

    const handleClick = async (cards) => {

        setLoading(true)

        const timer = cards.length*300

        let error = false

        for (const card of cards) {

            const data = doc (db, "Cards", card.id)

            await getDoc(data).then((snapshot)=>{

                let stock = snapshot.data().stock
                card.stock = stock

                if (card.stock < card.cantidad) {
                    card.cantidad = stock
                    error= true;
                    console.log("hubo un error, el item: " + card.nombre + " no tiene stock suficiente");
                }
            })
        }

        console.log(error);

        if (error === false) {
            for (const card of cards) {

                const data = doc (db, "Cards", card.id)

                getDoc(data).then((snapshot)=>{

                    let stock = snapshot.data().stock

                    let new_stock = stock - card.cantidad

                    updateDoc(data, {stock: new_stock})
                })
            }
            console.log("Gracias por su compra");
            context.wype()
        }

        setTimeout(() => {
            setLoading(false)
        }, timer);
    }

    // useEffect(() => {
    //     setLoading(true)
    // },[timer]);

    // const sendOrder = (arr) =>{

    //     const order = {
    //         buyer: { name: "juan", phone:"55555", email: "test@test.com"},
    //         items: arr.map((card) => (
    //             {nombre: card.nombre, precio: card.precio , cantidad: card.cantidad, total_parcial: card.precio*card.cantidad } ))
    //     }
    //     const ordersCollection = collection(db, "orders")

    //     addDoc(ordersCollection, order).then(({id}) =>{
    //         console.log(id)
    //     })
    // }


    if (loading) {
        return (
            <div className="loading_bg">
                <img src={GotLogo} alt="" height="500px" width="1200px"></img>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border m-5 text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }else {
        if (arr.length === 0){
            return (
                <div>
                    <NavBar />
                    <div className="App container-fluid got_bg">
                        <div>El Carrito esta vacio</div>
                        <NavLink className="btn btn-secondary m-3 border-dark border-2" to={"/"}>Volver</NavLink>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar />
                    <div className="App container-fluid got_bg p-1">
                        {context.check().map((card, index) => (
                        <CartItem key={index} card={card}/>))}
                        <ButtonFunct nombre="Vaciar" funcion={() => context.wype()}/>
                        <ButtonFunct nombre="Comprar" funcion={() => handleClick(context.check())} />
                    </div>
                </div>
            )
        }
    }
}


export default CartBody