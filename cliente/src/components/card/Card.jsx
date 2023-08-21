import React from 'react';
import style from './Card.module.css';
import ImageList from '../imageList/ImageList';


const Card = ({proyect}) =>{
    
    return(
        <div className={style.container}>
            <div className={style.imageCard}>
                <a href={proyect.url} target='_blank' >
                    <img 
                        src={ImageList[proyect.image]}
                    />
                </a>
                
            </div>
            <div className={style.datosCard}>
                <p>{proyect.description}</p>
            </div>
        </div>
    )
};

export default Card;