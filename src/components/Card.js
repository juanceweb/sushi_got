import React from "react";



const Card = ({imagen, size}) => {

    return (
        <div className="col-3">
            <img src={imagen} width={size} className="border border-dark border-1"></img>
        </div>
    )
}

export default Card

// {require(`../media/