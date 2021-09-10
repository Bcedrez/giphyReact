import React  from "react";
import { useFetchGifs } from "../hooks/useFechGifs";
import { GifGridItem } from "./GifGridItem";



export const GifGrid = ({categoria})=>{
    
    const {data,loading} = useFetchGifs(categoria);   

    return (
        <>
        <h3>{categoria}</h3>

        {loading && <p>loading...</p>}
        
        <div className="card-grid">  
            
                {
                    data.map(imagen =>{
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