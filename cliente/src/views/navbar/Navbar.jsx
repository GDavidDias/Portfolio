import style from './Navbar.module.css';


const Navbar = () =>{
    return(
        <div className={style.container}>
            <div className={style.name}>
                <h1>Guillermo David Dias</h1>
            </div>
            <div className={style.menu}>
                <h3>Inicio</h3>
                <h3>Proyectos</h3>
                <h3>Habilidades</h3>
                <h3>Contacto</h3>
            </div>
        </div>
    )
};

export default Navbar;