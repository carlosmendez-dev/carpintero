import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import * as React from "react"
import ButtonBack from '../components/ButtonBack';
import  IconButton  from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function About({setTitle, setView}){


    const changeView = () =>{
        setView(0)
    }


    React.useEffect(()=>{
        setTitle("Acerca De");
    },[setTitle])
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='font-bold'>Acerca de:</h1>
                <img src="icon.svg" alt="" width={100} />

                <h1 className='font-bold text-xl'>Carpintero</h1>
                <h1 className='text-sm text-gray-500'>0.1.0-alpha</h1>

                <table className="rounded-2xl w-[300px] mt-6">
        <caption className=" font-bold mb-1">Desarrolladores</caption>
          <tbody>
                <tr className="border border-gray-300 w-full">
                  <td className="p-1 bg-slate-50 w-full flex gap-2 pl-2"><img src="https://avatars.githubusercontent.com/u/181876093?v=4" width={20} className='rounded-full bg-slate-50' alt="" />Carlos Chan</td>
                  <td className="p-1 bg-slate-50 text-gray-400 pe-3"><a target='_blank' href="https://github.com/carlosmendez-dev" className='flex text-sm gap-2'><i className='bi bi-github'></i>GitHub</a></td>
                </tr>

                <tr className="border border-gray-300 w-full">
                  <td className="p-1 bg-slate-50 w-full flex gap-2 pl-2"><img src="https://avatars.githubusercontent.com/u/190049477?v=4" width={20} className='rounded-full bg-slate-50' alt="" />Gustavo chi</td>
                  <td className="p-1 bg-slate-50 text-gray-400 pe-3"><a target='_blank' href="https://github.com/IsraelMartinez007" className='flex text-sm gap-2'><i className='bi bi-github'></i>GitHub</a></td>
                </tr>
          </tbody>
        </table>

        <div className='text-center mt-4'>
        <p className='font-bold'>Licencia</p>
        <p>GNU AGPLv3 </p>
        </div>


            </div>
            <div className="fixed left-2 top-16 z-50">
    <IconButton onClick={changeView}>
      <ArrowBackIcon />
    </IconButton>
    </div>
        </div>
    )
}