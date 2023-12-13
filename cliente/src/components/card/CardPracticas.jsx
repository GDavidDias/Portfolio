import React from 'react'
import style from './Card.module.css';

const CardPracticas = ({practicas}) => {
  return (
    <div className={style.container}>
            <div className={style.imageCard}>
                <a href={practicas.url} target='_blank' >
                    <img 
                        // src={ImageList[proyect.image]}
                        src={practicas.image}
                    />
                </a>
                
            </div>
            <div className={style.datosCard}>
                <p>{practicas.description}</p>
            </div>
        </div>
  )
}

export default CardPracticas;