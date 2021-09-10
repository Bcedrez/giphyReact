import React, { useState } from "react";
import { AddCatergory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];



const GifExpertApp = ()=>{

    const [categorias, setCategorias] = useState(['Samurai X'])

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCatergory setCategorias={setCategorias}/>

            <ol>
                {
                    categorias.map((categoria,i) =>{
                        return <GifGrid
                                        key={categoria}                                      
                                        categoria={categoria} />
                    })
                }
            </ol>



        </>
    )

}

export default GifExpertApp