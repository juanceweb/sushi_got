import React, { useState } from "react";
import CartContext from "./CartContext";

function CustomContext ({children}){
    
    const [arr, setArr] = useState([])

    function add(card, cantidad) {
        const result = arr.find(element => element.link == card.link)
        if (result == undefined) {
            console.log("se cargo al carrito");
            const aux = [...arr,{id: card.id, nombre: card.name, cantidad: cantidad, img : card.img, precio: card.price, colour: card.colour, banner: card.banner, link: card.link, stock: card.stock}]
            setArr(aux)
        }else {
            console.log(result.stock)
            console.log(result.cantidad);
            console.log(cantidad);
            if ( (result.cantidad + cantidad) > result.stock){
                console.log("No hay mas stock");
            }
            else {
                result.cantidad =result.cantidad + cantidad;
                console.log(result.cantidad);
            }
        }
    }

    function change_cant (card, new_cant) {
        const result = arr.find(element => element.link == card.link)
        result.cantidad = new_cant
    }

    function check() {
        return arr;
    }

    function remove(link) {
        const newArray = arr.filter(element => element.link != link)
        setArr(newArray)
    }

    function wype() {
        setArr([])
    }

    // function total_price(card) {
    //     const result = arr.find(element => element.link == card.link)
    //     console.log(result.total);
    //     console.log(result.cantidad);
    //     result.total =  result.precio*result.cantidad
    // }

    return (
        <CartContext.Provider value={{add, wype, check,remove, change_cant, arr}}>
            {children}
        </CartContext.Provider>
    )

}

export default CustomContext;