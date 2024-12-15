import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { useEffect, useState } from 'react';

export default function(){
    const [isVisible,setVisible] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setVisible(false);
        },2000);

        return ()=> clearTimeout(timer);
    },[]);

    if (!isVisible){
        return null;
    }

    return (
        <div  className='flex justify-center items-center fixed left-0 top-0 h-screen w-screen z-50 bg-white'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <ViewInArOutlinedIcon sx={{fontSize:80}}></ViewInArOutlinedIcon>
                <h1 className='text-2xl'>CARPINTERO</h1>
            </div>
        </div>
    )
}