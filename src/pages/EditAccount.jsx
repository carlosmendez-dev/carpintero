import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
export default function EditAccount(){
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
            <Avatar sx={{height:150, width:150}}></Avatar>
            <Button variant="outlined" startIcon={<EditIcon/>}>actualizar foto</Button>
            <div className='flex flex-col justify-center items-center gap-5 w-full p-6' >
            <TextField sx={{width:"100%"}} id="outlined-basic" label="Nombres" variant="outlined" />
            <TextField sx={{width:"100%"}}
            id="outlined-multiline-static"
            label="Biografía"
            multiline
            rows={2}
            />
            <Button sx={{width:"100%"}} variant="contained">aceptar</Button>
            </div>
            </div>
        </div>
    )
}