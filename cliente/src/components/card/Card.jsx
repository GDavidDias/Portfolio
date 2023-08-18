import style from './Card.module.css';


const Card = ({proyect}) =>{
    return(
        <div className={style.container}>
            <div className={style.imageCard}>

            </div>
            <div className={style.datosCard}>
                <h1>{proyect.id}</h1>
                <h1>{proyect.url}</h1>
            </div>
        </div>
    )
};

export default Card;