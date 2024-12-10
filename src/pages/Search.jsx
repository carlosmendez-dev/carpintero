import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import  SearchIcon  from '@mui/icons-material/Search';
import * as React from "react"

export default function Search({setTitle}){

    React.useEffect(()=>{
        setTitle("Buscar")
    },[setTitle])

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <TextField variant='filled' label="Buscar..." sx={{width:"100%",height:"10px"}} ></TextField>
            <div className='grow'>
            </div>
        </div>
    )
}