import style from './Navbar.module.css';


const Navbar = () =>{
    return(
        <div className={style.container}>
            <div className={style.name}>
                <h1>Guillermo David Dias</h1>
            </div>
            <div className={style.menu}>
                <a href='#seccionInicio'><h3>Inicio</h3></a>
                <a href='#seccionProyectos'><h3>Proyectos</h3></a>
                <a href='#seccionHabilidades'><h3>Habilidades</h3></a>
            </div>
        </div>
    )
};

export default Navbar;