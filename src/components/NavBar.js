import React from "react";
import imgCarrito from "../media/img-carrito.png";
import BottonCarrito from "./CartWidget"
import { Link, NavLink } from "react-router-dom";
import {useContext} from "react";
import CartContext from "../contexts/CartContext";

function NavBar() {

    const {arr} = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="nav-link text-secondary" to="/">SUSHI GOT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-evenly">
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/rules"}>RULES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/all_cards"}>ALL CARDS</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white disabled" href="#">PLAY ONLINE</a>
                        </li>
                    </ul>
                </div>
                <NavLink to={"/cart"}><BottonCarrito img={imgCarrito}/><span className="badge bg-secondary">{arr.length}</span></NavLink>                
            </div>
        </nav>
    )
}

export default NavBar