import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
export default function Account(){
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className='flex flex-col justify-center items-center gap-10'>
            <Avatar sx={{height:150, width:150}}></Avatar>
            <div className='flex flex-col justify-center items-center'>
            <div className='font-bold text-xl'>Nombres</div>
            <div>biografia del usuario</div>
            </div>
            <Button variant="outlined" startIcon={<EditIcon/>}>editar</Button>
            </div>
        </div>
    )
}