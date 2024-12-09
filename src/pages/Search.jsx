import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import  SearchIcon  from '@mui/icons-material/Search';

export default function(){
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <TextField sx={{width:"100%",height:"10px"}} slotProps={{input:{startAdornment:<InputAdornment position='start'><SearchIcon></SearchIcon></InputAdornment>}}}></TextField>
            <div className='grow'>
            </div>
        </div>
    )
}