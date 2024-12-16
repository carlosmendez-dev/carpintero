import * as React from 'react';
import CardModel from '../components/CardModel';
import "@google/model-viewer"

export default function Home({setTitle,setView,modelos,setModel}){

React.useEffect(()=>{
    setTitle("Inicio")
},[setTitle])

    return (
        <div  className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-wrap justify-center items-center gap-2 overflow-y-auto w-full p-2'>
                {modelos.map((models)=>(
                    <CardModel model={models} setTitle={setTitle} setView={setView} setModel={setModel}></CardModel>
                ))}
            </div>
        </div>
    )
}