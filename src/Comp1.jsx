import { useState } from 'react';

const Comp1 = () => {

    const [segundos, setSegundos] = useState()
    const [tiempo, setTiempo] = useState()

    const onSetSegundos = ( evt ) => {
        setSegundos( evt.target.value ) 
    }

    const ConvertirTiempo = () =>
    {
        var horas = (segundos / 3600)        
        var minutos = (segundos / 60)
        var segundosR = (segundos % 60)

        setTiempo(`El tiempo consta de: 
        ${horas.toFixed()} Horas,
        ${minutos.toFixed(1)} Minutos,
        ${segundosR.toFixed(1)} Segundos`)
    }

    return(
        <>
        <h1> Laura Camila Riascos Hernández ~ 2211185 </h1>
        <h1> Ejercicio #01 </h1>
        <h2> Convertir Segundos </h2>
        <p> Diligencia el tiempo en segundos: </p>
        <input type="text" value={segundos}
        onChange={(event) => onSetSegundos(event)}/>
        <br/>
        <button onClick={() => ConvertirTiempo()}> Convertir </button>
        <p>{tiempo}</p>
        </>
    )
}

export default Comp1