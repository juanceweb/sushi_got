import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getDoc, doc, getFirestore, where, query, limit } from "firebase/firestore";
import ButtonFunct from "./Commons";
import GotLogo from "../media/logo_got.jpg";
import NavBar from './NavBar';

const DetailContainer = () => {

    const {id} = useParams() || ""

    const [carta, setCarta] = useState([])

    const [loading, setLoading] = useState(true)

    const db = getFirestore();

    useEffect(() => {
        
        // const data = doc (db, "Cards", id)
        
        // getDoc(data).then((snapshot)=>{
        //     setCarta([snapshot.data()])
        // })

        const q = query(collection(db, "Cards"), where("link","==", id),limit(1));

        getDocs(q).then((snapshot) => {
            setCarta(snapshot.docs.map((doc) => ({ id: doc.id,...doc.data()})))
        });
        
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    },[]);

    if (loading) {
        return (
            <div className="loading_bg">
                <img src={GotLogo} alt="" height="500px" width="1200px"></img>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border m-5 text-danger" role="status">
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
                    <ItemDetail card={carta[0]}/>
                </div>
            </div>
        )
    }
}

export default DetailContainer