import React, { useState } from 'react';
import './Section.css';
import { data } from './SectionData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



function Section() {

    const [ currImg, setCurrImg ] = useState(0)
    return (
        <>
        <div className="section">
            <div className="col-2">
                <div className="mySlides">
                    <img src={ data[currImg].img } alt="" /> 
                    <button className="btn4">get started
                    <span><FontAwesomeIcon icon={ faArrowRight } /></span>
                    
                    </button>
                </div>
            </div>

            <button className="btn" onClick={() => {
                currImg < data.length - 1 && setCurrImg(currImg + 1);

            }}>
            <span><FontAwesomeIcon icon={ faArrowRight } /></span></button>

            <button className="btn1" onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
            }}>
                <span><FontAwesomeIcon icon={ faArrowLeft } /></span></button>
            <div className="numbertext">
               <p>{data[currImg].text}</p>
            </div>   
            <div className="words">
                <p>project</p>
                <h2>lorem</h2>
            </div>
            <div className="line">
                <p>-</p>
            </div>
        </div>
        </>
        
    )
}

export default Section;