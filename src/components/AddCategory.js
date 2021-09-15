import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCatergory = ({setCategorias}) => {


    const [valorInput, SetValorInput] = useState('')

    const handleValorInput = (e) => {
        SetValorInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(valorInput.trim().length > 1){
            setCategorias(categorias =>[valorInput,...categorias])
            SetValorInput('')
        }
        
        
    }

    return (

      
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Buscar Gif"
            type="text"
            value={valorInput}
            onChange={handleValorInput}
            />
        </form>
    );
}

AddCatergory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}