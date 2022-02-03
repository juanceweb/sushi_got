import React from "react";
import AddToCart from "./ItemAddToCart"

const ItemDetail = ({card}) => {

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className={"col-6 border d-flex justify-content-center border-dark border-3 mt-3 px-0"}>
                    <AddToCart stockBase={card?.stock} price={card?.price} card={card}/>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className={`col-6 cardDetail card mx-5 my-3 border border-dark border-3 ${card?.colour}`}>
                    <h3 className="cardDetail_name text-white">{card?.name?.toUpperCase()}</h3>
                    <img src={require(`../media/${card?.img}`)} className="cardDetail_img border border-dark border-2 img-fluid" alt="..."></img>
                    <img src={require(`../media/${card.banner}`)} className="cardDetail_house img-fluid"></img>
                    <h4 className="cardDetail_quote align-middle border border-dark border-2 text-white">{card?.quote}</h4>
                    <h6 className="cardDetail_points border-top border-1 text-white">{card?.point}</h6>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail