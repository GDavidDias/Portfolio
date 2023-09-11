import { useEffect, useState } from 'react';
import style from './Home.module.css';
import Card from '../../components/card/Card';
import {
    RiLinkedinBoxFill,
    RiGithubFill,
    RiJavascriptLine,
    RiReactjsLine,
    RiHtml5Fill,
    RiCss3Fill,
    RiWhatsappFill,
} from "react-icons/ri";
import {TbBrandRedux} from 'react-icons/tb';
import {SiPostgresql,SiSequelize,SiExpress,SiFigma} from 'react-icons/si';
import {HiMail,HiDocumentDownload} from 'react-icons/hi';
import {FaNodeJs,FaMoon,FaWordpress} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import fotoPerfil from '../../../assets/imagePerfil/foto_perfil.jpg'
import dataJson from '../../../src/data/data.json';
import CVFile from '../../../assets/CV/CV - Guillermo David Dias 2023.pdf';
import iconMoodle from '../../../assets/icon/moodle.svg';
const NUMERO = +541169364350;

const Home = () =>{
    const[data,setData] = useState();

    useEffect(()=>{
        const fetchdata = async () => {
            try{
                const response = dataJson;
                setData(response)
            }catch(error){
                console.log('error al traer datos: ', error.message);
            }
        };
        fetchdata();
    },[]);

    useEffect(()=>{
        console.log('que tiene data: ', data)
    },[data])

    const[isHovered, setIsHovered]=useState(false);
    const[skill, setSkill]=useState('');

    const handleMouseEnter = (value)=>{
        setIsHovered(true);
        console.log("que tiene value en mouseenter: ", value)
        setSkill(value);
    }
    const handleMouseLeave = () =>{
        setIsHovered(false);
        setSkill('');
    }


    return(
        <div className={style.container}>
            <section id='seccionInicio'>
            <div className={style.Inicio}>
                <h1 id='inicio' className={style.espacioInicial}>Inicio</h1>
                <div className={style.InicioContainer}>
                    <div className={style.descripcionInicio}>
                        <p>Soy desarrollador fullstack con background en Analisis de Sistemas y Profesor en Disciplinas Industriales especialidad informatica, tengo experiencia en el desarrollo de plataformas institucionales y aulas virtuales utilizando gestores como WordPress y Moodle.</p>
                        <p>Para el desarrollo de las aplicaciones manejo tecnologias del entorno JavaScript, React, Redux, Node, Express, Sequelize, PostreSQL.</p>
                        <p>Proactivo, siempre dispuesto a nuevos desafios y a continuar aprendiendo nuevas tecnologias para aportar la mejor solucion a las necesidades requeridas.</p>
                        <h3>Datos de Contacto</h3>
                        <div className={style.contacto}>
                            <div className={style.contactoMail}>
                                <div className={style.icono}>
                                    <a href='mailto:guillermo.david.dias@gmail.com' 
                                    >
                                        <div className={style.grow}>
                                            <MdOutlineAlternateEmail className={style.iconInicio}/>
                                        </div>
                                    </a>
                                </div>
                                <p>guillermo.david.dias@gmail.com</p>
                            </div>
                            <div className={style.contactoWhatsapp}>
                                <a href={`https://api.whatsapp.com/send?phone=${NUMERO}&text=Hola%20Guillermo,%20quisiera%20contactarte.`} target='_blank'>
                                    <div className={style.grow}>
                                        <RiWhatsappFill className={style.iconInicio}/>
                                    </div>
                                </a>
                                <p>{`(+54) 11 69364350`}</p>
                            </div>
                            <div className={style.contactoCV}>
                                <a href={CVFile} download>
                                    <button>Descargar Curriculum</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.fotoInicio}>
                        <img src={fotoPerfil}></img>
                        <div className={style.iconosFotoInicio}>
                            <a href='https://www.linkedin.com/in/gdd800804/' 
                                target='_blank'
                            >
                                <div className={style.grow}>
                                    <RiLinkedinBoxFill className={style.iconInicio}/>
                                </div>
                            </a>

                            <a href='https://github.com/GDavidDias' 
                                target='_blank'
                            >
                                <div className={style.grow}>
                                    <RiGithubFill className={style.iconInicio}/>
                                </div>
                            </a>


                            {/* <a href='mailto:guillermo.david.dias@gmail.com' 
                            >
                                <div className={style.grow}>
                                    <MdOutlineAlternateEmail className={style.iconInicio}/>
                                </div>
                            </a> */}

                            {/* <a href={CVFile} 
                                download
                            >
                                <div className={style.grow}>
                                    <HiDocumentDownload className={style.iconInicio}/>
                                </div>
                            </a> */}

                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section id='seccionProyectos'>
            <div className={style.Proyectos}>
                <h1 id='proyectos' className={style.espacioProyectos}>Proyectos</h1>
                <div className={style.CardsProyectos}>
                    {
                        data?.proyects.map((proyect,index)=>(
                            <div key={index}>
                                <Card proyect={proyect}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            </section>
            <section id='seccionHabilidades'>
            <div className={style.Habilidades}>
                <h1 id='habilidades' className={style.espacioHabilidades}>Habilidades</h1>
                <div className={style.HabilidadesContainer}>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("JavaScript")} onMouseLeave={handleMouseLeave}>
                        <RiJavascriptLine className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("React")} onMouseLeave={handleMouseLeave}>
                        <RiReactjsLine className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("Redux")} onMouseLeave={handleMouseLeave}>
                        <TbBrandRedux className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("Node.js")} onMouseLeave={handleMouseLeave}>
                        <FaNodeJs className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("Express")} onMouseLeave={handleMouseLeave}>
                        <SiExpress className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("Sequelize")} onMouseLeave={handleMouseLeave}>
                        <SiSequelize className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("PostgreSQL")} onMouseLeave={handleMouseLeave}>
                        <SiPostgresql className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("HTML")} onMouseLeave={handleMouseLeave}>
                        <RiHtml5Fill className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("CSS")} onMouseLeave={handleMouseLeave}>
                        <RiCss3Fill className={style.iconHabilidades}/>
                    </div>
                    {/* <div className={style.grow} onMouseEnter={()=>handleMouseEnter("Figma")} onMouseLeave={handleMouseLeave}>
                        <SiFigma className={style.iconHabilidades}/>
                    </div> */}

                </div>
                <div className={style.Habilidades2Container}>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("Moodle")} onMouseLeave={handleMouseLeave}>
                        {/* <iconMoodle className={style.iconHabilidades}/> */}
                        <img src={iconMoodle} className={style.iconMoodle}/>
                    </div>
                    <div className={style.grow} onMouseEnter={()=>handleMouseEnter("WordPress")} onMouseLeave={handleMouseLeave}>
                        <FaWordpress className={style.iconHabilidades}/>
                    </div>
                </div>
                <div className={style.textSkill}>
                    {
                        isHovered && <h1>{skill}</h1>
                    }
                </div>
            </div>
            </section>
        </div>
    )
};

export default Home;