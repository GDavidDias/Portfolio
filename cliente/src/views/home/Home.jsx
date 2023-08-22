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
} from "react-icons/ri";
import {TbBrandRedux} from 'react-icons/tb';
import {SiPostgresql,SiSequelize,SiExpress,SiFigma} from 'react-icons/si';
import {HiMail,HiDocumentDownload} from 'react-icons/hi';
import {FaNodeJs,FaMoon} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import fotoPerfil from '../../../assets/imagePerfil/foto_perfil.jpg'
import dataJson from '../../../src/data/data.json';
import CVFile from '../../../assets/CV/CV - Guillermo David Dias 2023.pdf';

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


                            <a href='mailto:guillermo.david.dias@gmail.com' 
                            >
                                <div className={style.grow}>
                                    <MdOutlineAlternateEmail className={style.iconInicio}/>
                                </div>
                            </a>

                            <a href={CVFile} 
                                download
                            >
                                <div className={style.grow}>
                                    <HiDocumentDownload className={style.iconInicio}/>
                                </div>
                            </a>

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
                    <div className={style.grow}>
                        <RiJavascriptLine className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <RiReactjsLine className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <TbBrandRedux className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <FaNodeJs className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <SiExpress className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <SiSequelize className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <SiPostgresql className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <RiHtml5Fill className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <RiCss3Fill className={style.iconHabilidades}/>
                    </div>
                    <div className={style.grow}>
                        <SiFigma className={style.iconHabilidades}/>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
};

export default Home;