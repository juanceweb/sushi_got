import React, {useContext, useState} from "react";
import AddToCart from "./ItemAddToCart"

const ItemDetail = ({card}) => {

    // const [cantidad, setCantidad] = useState(0)

    // const context = useContext(CartContext)

    // const img = require(`../media/${card?.img}`)

    // const house = require(`../media/${card?.banner}`)

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

    // return (
    //     <div className="container-fluid pb-5">
    //         <div className="row d-flex justify-content-center">
    //             <div className="col-3 card border border-dark border-3 bg-danger">
    //                 <img src={pokemon?.sprites?.front_default} className="border border-dark border-3 card-img-top mt-3 bg-white" alt="..."></img>
    //                 <div className="card-body">
    //                     <h5 className="card-title text-white">{pokemon?.name?.toUpperCase()}</h5>
    //                     <h4 className="card-title text-success">${pokemon?.weight}</h4>
    //                     <FunctAddRest getCantidad={(c) => setCantidad(c)} stockIni={8} />
    //                     <a href="#" onClick={() => context.add(pokemon, cantidad)} className="btn btn-secondary m-3 border-dark border-2">AGREGAR AL CARRITO</a>
    //                 </div>
    //             </div>
    //             <div className="col-3 card border border-dark border-3 bg-danger">
    //                 <div className="card-body container ">
    //                     <h3 className="text-white">POKEDEX</h3>
    //                     <div className="row bg-secondary border align-items-center my-2">
    //                         <h5 className="h-100 col text-white text-start mt-2">ENTRY N°:</h5>
    //                         <h5 className="col text-white mt-2">{pokemon?.id}</h5>
    //                     </div>
    //                     <div className="row bg-secondary border align-items-center my-2">
    //                         <h5 className="col text-white text-start mt-2">HEIGHT:</h5>
    //                         <h5 className="col text-white mt-2">{pokemon?.height} fts</h5>
    //                     </div>
    //                     <div className="row bg-secondary border align-items-center my-2">
    //                         <h5 className="col text-white text-start mt-2">WEIGHT:</h5>
    //                         <h5 className="col text-white mt-2">{pokemon?.weight} lb</h5>
    //                     </div>
    //                     <div className="row bg-secondary border align-items-center my-2">
    //                         <h5 className="col text-white text-start mt-2">TYPE:</h5>
    //                         {pokemon?.types?.map((element, index) => (
    //                             <h5 key={index} className="col text-white mt-2">{element?.type?.name.toUpperCase()}</h5>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default ItemDetail