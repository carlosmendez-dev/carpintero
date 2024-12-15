import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
export default function Account({setView, setTitle}){

    const editAccount = ()=>{
        setView(4);
    }

    useEffect(()=>{
        setTitle("Cuenta");
    },[setTitle])
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className='flex flex-col justify-center items-center gap-10'>
            <Avatar sx={{height:150, width:150}}></Avatar>
            <div className='flex flex-col justify-center items-center'>
            <div className='font-bold text-xl'>Nombres</div>
            <div>biografia del usuario</div>
            </div>
            <Button variant="outlined" startIcon={<EditIcon/>} onClick={editAccount}>editar</Button>
            </div>
        </div>
    )
}