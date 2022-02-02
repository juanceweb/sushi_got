import { useEffect, useState } from "react";
import Item from "./Item";



const ItemList = ({listaCards}) => {

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
            {listaCards?.map((card, index) => (
                <Item key={index} card={card}/>
            ))}
            </div>
        </div>
    )
}


export default ItemList