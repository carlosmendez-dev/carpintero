
import { useEffect } from "react";
import  IconButton  from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";

export function BuildModel({ setTitle, setView, model }) {

  useEffect(()=>{
    const metaTagColorTheme = document.querySelector("meta[name='theme-color']");
        if (metaTagColorTheme){
            metaTagColorTheme.setAttribute("content","white");
        }


},[])

  const changeView = () =>{
    setView(5)
}
  return (
    <div className="flex flex-col overflow-y-auto fixed w-screen h-full top-0 left-0 z-50">

        
        <div className="bg-white flex items-center justify-center h-full">
          <model-viewer
            src={model.model}
            ios-src={model.model}
            ar
            auto-rotate
            autoplay
            camera-controls
          >
             <div slot="ar-button" className="fixed bottom-[20px] w-full px-4">
              <Button variant="contained" sx={{width:"100%"}}>
              <i className="bi bi-rocket"></i>
              <span>PROYECTAR</span>
              </Button>
             </div>
          </model-viewer>
        </div>
        <div className="fixed left-2 top-5">
    <IconButton onClick={changeView}>
      <ArrowBackIcon />
    </IconButton>
    </div>

      

    </div>
  );
}
