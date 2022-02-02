import React, {useEffect, useState} from "react";



const QuantityAddRest = ({valorInicial = 1, stockIni, getCantidad, clases}) => {

    const [valor, setValor] = useState(valorInicial)
    const [stock, setStock] = useState(stockIni)

    const add = () => {
        (valor < stock ) ? setValor((prev) => prev + 1) : console.log("stock max");
    }

    const rest = () => {
        (valor > 1 ) ? setValor((prev) => prev - 1) : console.log("stock min");
    }

    useEffect(() => {
        getCantidad(valor)
    },[valor])

    return (
        <div className={`${clases} d-flex`}>
            <button className="btn border-2 text-white bg-danger border-dark m-auto px-3" onClick={rest}>-</button>
            <p className="m-auto px-2">{valor}</p>
            <button className="btn text-white border-2 bg-success border-dark m-auto px-3" onClick={add}>+</button>
        </div>
    );
}

export default QuantityAddRest