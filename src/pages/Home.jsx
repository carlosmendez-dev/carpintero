import * as React from 'react';
import axios from 'axios';
import CardModel from '../components/CardModel';
import "@google/model-viewer"

export default function Home({setTitle}){

  const [Modelos,setModelos] = React.useState([]);
  
  React.useEffect(()=>{
    axios.get("database.json")
    .then((response)=>{
        setModelos(response.data.models)
        console.log(response.data.models)
    })

},[])

React.useEffect(()=>{
    setTitle("Inicio")
},[setTitle])

    return (
        <div  className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-wrap justify-center items-center gap-1 overflow-y-auto w-full p-1'>
                {Modelos.map((models)=>(
                    <CardModel model={models}></CardModel>
                ))}
            </div>
        </div>
    )
}