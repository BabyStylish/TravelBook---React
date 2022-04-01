import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return(
        <div className="div--nav">
            <nav>
                <h3><FontAwesomeIcon icon={faEarthAmericas} className="icon--border"/>my travel journal.</h3>
            </nav>   
        </div>
    );
}