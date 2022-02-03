import React, {useEffect, useState} from "react";
import FunctItemList from "./ItemList"
import NavBar from './NavBar';
import GotLogo from "../media/logo_got.jpg";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ListContainer = () => {

    const [ListCards, setListCards] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const collect = collection(db, "Cards");

        getDocs(collect).then((snapshot) => {
            setListCards(snapshot.docs.map((doc) => ({ id: doc.id,...doc.data()})))
        })
    }, [])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[]);

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
        return (
            <div>
                <NavBar />
                <div className="App got_bg">
                    <FunctItemList listaCards={ListCards}/>
                </div>
            </div>
            )  
    }
}

export default ListContainer