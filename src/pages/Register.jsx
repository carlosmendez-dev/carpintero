import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Box  from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import {supabase} from "../supabase/client";
import { useState } from "react";

export default function Register(){
    const [userName,SetName] = useState("");
    const [userEmail,SetEmail] = useState("");
    const [userPassword,SetPassword] = useState("");


    const navegate = useNavigate();

    const onFormSubmit = async (event)=> {
        event.preventDefault()
        const metaTagColorTheme = document.querySelector("meta[name='theme-color']");
        if (metaTagColorTheme){
            metaTagColorTheme.setAttribute("content","#1976D2");
        }else{
            alert("no se encontro el tag")
        }

        let { data, error } = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword
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


                    <h6 className="text-2xl font-semibold opacity-75 mb-3">Crear Cuenta</h6>

                    <TextField label="Nombre" sx={{width:"100%"}} onInput={(e)=>{SetName(e.target.value)}}></TextField>
                    <TextField label="Correo" sx={{width:"100%"}} onInput={(e)=>{SetEmail(e.target.value)}}></TextField>
                    <TextField type="password" label="Contraseña" sx={{width:"100%"}} onInput={(e)=>{SetPassword(e.target.value)}}></TextField>
                    <Button type="submit" variant="contained" sx={{width:"100%"}}>Registrarse</Button>
                    <div className="flex flex-col items-center">
                    <p className="text-sm text-opacity-90">¿Ya tienes una cuenta?</p>
                    <Link to="/carpintero/login" className="text-blue-600 font-semibold">Iniciar Sesion</Link>
                    </div>
            </form>
        </div>
    )
}