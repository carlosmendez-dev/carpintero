import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Box  from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import {supabase} from "../supabase/client";
import { useState } from "react";

export default function Login(){
    const [userEmail,SetEmail] = useState("");
    const [userPassword,SetPassword] = useState("");

    const navegate = useNavigate();

    /*React.useEffect(()=>{
        const getUser = async ()=>{
    
          const { data: { user } } = await supabase.auth.getUser();
          if (user){
            navegate("/carpintero/dashboard");
          }
        }
    
        getUser();
      },[])*/

    const onFormSubmit = async  (event)=> {
        event.preventDefault()

        let { data, error } = await supabase.auth.signInWithPassword({
            email: userEmail,
            password: userPassword,
            })

            if (error){
                alert("error");
                return 1;
            }
    
            if (data.user){
                navegate("/carpintero/dashboard")
            }

    }

    return (
        <div className="bg-slate-50 h-dvh flex justify-center items-center">
                <form action="" onSubmit={onFormSubmit} className="flex  flex-col justify-center items-center gap-3 w-[300px]">

                    <div className="flex flex-col items-center mb-3">
                    <img src="icon.svg" alt="" width={100} className="mb-2"/>
                    </div>


                    <h6 className="text-2xl font-semibold opacity-75 mb-3">Iniciar Sesion</h6>

                    <TextField label="Correo" sx={{width:"100%"}} onInput={(e)=>{SetEmail(e.target.value)}}></TextField>
                    <TextField type="password" label="Contraseña" sx={{width:"100%"}} onInput={(e)=>{SetPassword(e.target.value)}}></TextField>
                    <Button type="submit" variant="contained" sx={{width:"100%"}}>Iniciar Sesion</Button>
                    <div className="flex flex-col items-center">
                    <p className="text-sm text-opacity-90">¿No tienes una cuenta?</p>
                    <Link to="/carpintero/register" className="text-blue-600 font-semibold">Crear cuenta</Link>
                    </div>
            </form>
        </div>
    )
}