import React from "react";
import PropTypes from 'prop-types';


const GifGridItem = ({id,titulo,url})=>{
    // console.log({id,titulo,url})
    return (
        <div className="card animate__animated animate__zoomIn">
           <img src={url} alt={titulo} />
           <p>{titulo}</p>
        </div>
    );
}

GifGridItem.propTypes = {
    titulo: PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
}


export default GifGridItem