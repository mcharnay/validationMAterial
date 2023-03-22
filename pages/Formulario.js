import react from "react";
import React, { useState } from 'react';
import TextFieldCustom from "../components/TextFieldCustom";

export default function formulario(){

    const [inputValue, setInputValue] = useState('');
    const [leyenda, setLeyenda] = useState('');
    const [errorTitulo, setErrorTitulo] = useState(false);


    //handleChange
    const handleChange=(e) => {
        
        setInputValue(e.target.value);
        console.log(inputValue)

        if( e.target.value === ''){
            console.log("vacío handleChange")
            setErrorTitulo(true)
            setLeyenda("Nombre debe ser mayor a 0")
            console.log("Nombre debe ser mayor a 0")
            console.log(errorTitulo)
        }else{
            setErrorTitulo(false)
            setLeyenda("")
        }
    }

    //handleBlur
    const handleBlur=(e) => {
        setInputValue(e.target.value);
        console.log(inputValue)

        if(e.target.value === ''){
            setErrorTitulo(true)
            console.log("Nombre Obligatorio on BLUR")
            setLeyenda("Nombre debe ser mayor a 0")
        }else{
            setErrorTitulo(false)
            setLeyenda("")
        }
    }
    return(
       
        <div>
            <TextFieldCustom
                label="Ingrese un nombre" 
                input="text"  
                onChange={handleChange} 
                onBlur={handleBlur}
                // flagError={!!errors.nombre}
                // textError={errors.nombre?.message}
                value={inputValue}
                error = {errorTitulo}
                helperText={leyenda}
            />
        </div>
    )
}