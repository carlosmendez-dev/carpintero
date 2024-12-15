import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Box  from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navegate = useNavigate();

    const onFormSubmit = (event)=> {
        event.preventDefault()
        const metaTagColorTheme = document.querySelector("meta[name='theme-color']");
        if (metaTagColorTheme){
            metaTagColorTheme.setAttribute("content","#1976D2");
        }else{
            alert("no se encontro el tag")
        }
        navegate("/carpintero/dashboard")
    }

    return (
        <div className="bg-slate-50 h-dvh flex justify-center items-center">
                <form action="" onSubmit={onFormSubmit} className="flex  flex-col justify-center items-center gap-3 w-[300px]">

                    <div className="flex flex-col items-center mb-3">
                    <img src="icon.svg" alt="" width={100} className="mb-2"/>
                    </div>


                    <h6 className="text-2xl font-semibold opacity-75 mb-3">Iniciar Sesion</h6>

                    <TextField label="Correo" sx={{width:"100%"}}></TextField>
                    <TextField type="password" label="Contraseña" sx={{width:"100%"}}></TextField>
                    <Button type="submit" variant="contained" sx={{width:"100%"}}>Iniciar Sesion</Button>
                    <div className="flex flex-col items-center">
                    <p className="text-sm text-opacity-90">¿No tienes una cuenta?</p>
                    <Link to="/carpintero/register" className="text-blue-600 font-semibold">Crear cuenta</Link>
                    </div>
            </form>
        </div>
    )
}