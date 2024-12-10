import * as React from 'react';
import axios from 'axios';
import CardModel from '../components/CardModel';
import "@google/model-viewer"

export default function(){

  const [Modelos,setModelos] = React.useState([]);
  
  React.useEffect(()=>{
    axios.get("database.json")
    .then((response)=>{
        setModelos(response.data.models)
        console.log(response.data.models)
    })
  },[])

    return (
        <div  className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-wrap justify-center items-center gap-2 overflow-y-auto p-4 w-full'>
                {Modelos.map((models)=>(
                    <CardModel model={models}></CardModel>
                ))}
            </div>
        </div>
    )
}