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
        ${horas} Horas,
        ${minutos} Minutos,
        ${segundosR} Segundos`)
    }

    return(
        <>
        <h1> Ejercicio #01 </h1>
        <h2> Convertir Segundos </h2>
        <input type="text" value={segundos}
        onChange={(event) => onSetSegundos(event)}/>
        <button onClick={() => ConvertirTiempo()}> Segundos </button>
        <p>{tiempo}</p>
        </>
    )
}

export default Comp1