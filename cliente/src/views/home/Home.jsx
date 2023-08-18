import { useEffect, useState } from 'react';
import style from './Home.module.css';
import Card from '../../components/card/Card';


const Home = () =>{
    const[data,setData] = useState();

    useEffect(()=>{
        const fetchdata = async () => {
            try{
                const response = await fetch('../../../src/data/data.json');
                console.log('que tiene response: ', response);
                const jsonData = await response.json();
                setData(jsonData);
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
            <div className={style.Inicio}>
                <h1>Inicio</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum explicabo minus blanditiis facilis sit recusandae mollitia magni atque obcaecati, deserunt maiores cupiditate quasi tempore dolor quo aliquam officia autem.
                </p>
            </div>
            <div className={style.Proyectos}>
                <h1>Proyectos</h1>
                {
                    data?.proyects.map((proyect,index)=>(
                        <div key={index}>
                            <Card proyect={proyect}/>
                        </div>
                    ))
                }
            </div>
            <div className={style.Habilidades}>
                <h1>Habilidades</h1>
            </div>
            <div className={style.Contacto}>
                <h1>Contacto</h1>
            </div>
        </div>
    )
};

export default Home;