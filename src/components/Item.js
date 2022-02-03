import React from "react";
import { NavLink } from "react-router-dom";



const Item = ({card}) => {

    return (
        <NavLink className={`col-2 card nav-link mx-5 my-3 border border-dark border-3 ${card?.colour}`} to={`/card/${card?.link}`}>
                <h3 className="card_name text-white">{card?.name?.toUpperCase()}</h3>
                <img src={require(`../media/${card?.img}`)} className="card_img border border-dark border-2 img-fluid" alt="..."></img>
                <img src={require(`../media/${card.banner}`)} className="card_house img-fluid"></img>
                <h4 className="card_quote align-middle border border-dark border-2 text-white">{card?.quote}</h4>
                <h6 className="card_points border-top border-1 text-white">{card?.point}</h6>
        </NavLink>
    )
}

export default Item