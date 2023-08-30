import { useState } from 'react';

const Comp2 = () => {

    const [tiempo, setTiempo] = useState()
    const [costo, setCosto] = useState()

    const onSetTiempo = ( evt ) => {
        setTiempo( evt.target.value ) 
    }

    const CalcularPrecio = () =>
    {
        var costo = 100;
        var tiempoR = (tiempo / 60)

        if(tiempoR < 3){
            costo;
        }if(tiempoR > 3){
            costo = costo + (tiempoR-3) *50;
        }

        setCosto(`Costo total a pagar por
        ${tiempoR.toFixed(1)} minutos, es de ${costo.toFixed(1)} pesos`)
    }

    return(
        <>
        <h1> Ejercicio #02 </h1>
        <h2> Total a Pagar </h2>
        <p> Diligencia el tiempo de la llamada en segundos: </p>
        <input type="text" value={tiempo}
        onChange={(event) => onSetTiempo(event)}/>
        <br/>
        <button onClick={() => CalcularPrecio()}> Ver Costo </button>
        <p>{costo}</p>
        </>
    )
}

export default Comp2