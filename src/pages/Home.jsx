import * as React from 'react';
import axios from 'axios';
import CardModel from '../components/CardModel';

export default function(){

  const [Modelos,setModelos] = React.useState([]);
  
  React.useEffect(()=>{
    axios.get("database.json")
    .then((response)=>{
        setModelos(response.data.modelos)
    })
  },[])

    return (
        <div  className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-wrap justify-center items-center gap-2 overflow-y-auto p-2 w-full'>
                <CardModel></CardModel>
                <CardModel></CardModel>
                <CardModel></CardModel>
                <CardModel></CardModel>
                <CardModel></CardModel>
                <CardModel></CardModel>
                <CardModel></CardModel>
                <CardModel></CardModel>
                <CardModel></CardModel>
            </div>
        </div>
    )
}