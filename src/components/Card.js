import React from "react";



const Card = ({card}) => {

    return (
        <div className={`col-3 cardShow card border border-dark border-3 ${card?.colour}`}>
            <h3 className="cardShow_name text-white">{card?.name?.toUpperCase()}</h3>
            <img src={require(`../media/${card?.img}`)} className="cardShow_img border border-dark border-2 img-fluid" alt="..."></img>
            <img src={require(`../media/${card.banner}`)} className="cardShow_house img-fluid"></img>
            <h4 className="cardShow_quote align-middle border border-dark border-2 text-white">{card?.quote}</h4>
            <h6 className="cardShow_points border-top border-1 text-white">{card?.point}</h6>
        </div>
    )
}

export default Card