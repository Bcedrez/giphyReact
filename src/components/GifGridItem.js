import React from "react";


export const GifGridItem = ({id,titulo,url})=>{
    // console.log({id,titulo,url})
    return (
        <div className="card animate__animated animate__fadeInUp">
           <img src={url} alt={titulo} />
           <p>{titulo}</p>
        </div>
    );
}