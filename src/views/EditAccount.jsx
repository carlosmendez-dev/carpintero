import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import * as React from "react"
import ButtonBack from '../components/ButtonBack';

export default function EditAccount({setTitle, setview}){

    React.useEffect(()=>{
        setTitle("Editar Cuenta");
    },[setTitle])
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <ButtonBack setView={setview} indexView={3} ></ButtonBack>
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
            <Avatar sx={{height:150, width:150}}></Avatar>
            <div className='flex flex-col justify-center items-center gap-5 w-full p-6' >
            <Button variant="outlined" sx={{width:"100%"}} startIcon={<EditIcon/>}>cambiar foto</Button>
            <TextField sx={{width:"100%"}} id="outlined-basic" label="Nombre" variant="outlined" />
            <TextField sx={{width:"100%"}}
            id="outlined-multiline-static"
            label="Sobre mi..."
            multiline
            rows={4}
            />
            <Button sx={{width:"100%"}} variant="contained">actualizar</Button>
            </div>
            </div>
        </div>
    )
}