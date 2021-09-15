import React  from "react";

import PropTypes from 'prop-types';

import { useFetchGifs } from "../hooks/useFechGifs";
import  GifGridItem  from "./GifGridItem";



export const GifGrid = ({categoria})=>{
    
    const {data:imagenes,loading} = useFetchGifs(categoria);   

    return (
        <>
        <h3 className="animate__animated animate__rotateInDownLeft">{categoria}</h3>

        {loading && <p>loading...</p>}
        
        <div className="card-grid">  
            
                {
                    imagenes.map(imagen =>{
                        return <GifGridItem 
                                    key={imagen.id} 
                                    {...imagen}
                                   
                                     />
                    })
                }     
            
        </div>
       </> 
    )
}

GifGrid.propTypes = {
    categoria : PropTypes.string.isRequired
}