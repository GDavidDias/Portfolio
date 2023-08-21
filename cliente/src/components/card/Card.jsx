import style from './Card.module.css';
const path = '../../../assets/images';



const Card = ({proyect}) =>{
    
    return(
        <div className={style.container}>
            <div className={style.imageCard}>
                <a href={proyect.url} target='_blank' >
                    <img 
                        src={`${path}/${proyect.image}`}
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