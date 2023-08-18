import style from './Card.module.css';


const Card = ({proyect}) =>{
    return(
        <div className={style.container}>
            <div className={style.imageCard}>
                <img src={proyect.image}></img>
            </div>
            <div className={style.datosCard}>
                <p>{proyect.description}</p>
            </div>
        </div>
    )
};

export default Card;