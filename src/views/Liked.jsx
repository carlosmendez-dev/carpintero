import * as React from "react"

export default function Liked({setTitle}){

    React.useEffect(()=>{
        setTitle("Me Gusta")
    },[setTitle])

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            Hola Mundo
        </div>
    )
}