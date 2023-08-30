import { useState } from 'react';

const Comp3 = () => {

    const [hora, setHora] = useState()
    const [minutos, setMinutos] = useState()
    const [nombre, setNombre] = useState()
    const [saludo, setSaludo] = useState()

    const onSetHora = ( evt ) => {
        setHora( evt.target.value ) 
    }

    const onSetMinutos = ( evt ) => {
        setMinutos( evt.target.value ) 
    }

    const onSetNombre = ( evt ) => {
        setNombre( evt.target.value ) 
    }

    const BrindarSaludo = () =>
    {
        var horaH = parseInt(hora);

        if (horaH < 12) {
            setSaludo(`Buenos Dias, ${nombre}`);
        }if (12 < horaH && horaH < 19){
            setSaludo(`Buenos Tardes, ${nombre}`);
        }if (horaH > 19){
            setSaludo(`Buenos Noches, ${nombre}`);
        }

    }

    return(
        <>
        <h1> Ejercicio #03 </h1>
        <h2> Saludo </h2>
        <p> Diligencia tu nombre: </p>
        <input type="text" value={nombre}
        onChange={(event) => onSetNombre(event)}/>
        <br/>
        <br/>
        <p> Diligencia la hora en formato 24h </p>
        <p> Horas ||| Minutos </p>
        <input type="text" value={hora}
        onChange={(event) => onSetHora(event)}/>
        <input type="text" value={minutos}
        onChange={(event) => onSetMinutos(event)}/>
        <br/>
        <button onClick={() => BrindarSaludo()}> Saludo </button>
        <p>{saludo}</p>
        </>
    )
}

export default Comp3