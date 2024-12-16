import ButtonBack from "../components/ButtonBack";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export function ModelDetail({ setTitle, setView, model }) {
  function build(){
    setView(6);
  }

  let position = ""

  return (
    <div className="flex flex-col h-screen overflow-y-auto">

        
        <div className="bg-slate-200 flex items-center justify-center min-h-[300px] w-full">
          <model-viewer
            src={model.model_static}
            ios-src={model.model_static}
            ar
            ar-placement={model.placement}
            auto-rotate
            autoplay
            camera-controls
            camera-target="0m 0m 0m"
          >
             <button slot="ar-button" className="fixed bottom-[16px] text-sm flex gap-1 right-[16px] border-blue-700 border p-1 rounded-sm text-blue-700">
              <i className="bi bi-boxes"></i>
              <span>VISTA PREVIA</span>
             </button>
          </model-viewer>
        </div>

        <ButtonBack setView={setView} indexView={0}></ButtonBack>
        <div className="flex flex-col justify-start p-4">
          <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{model.name}</h1>
          {model.placement=="wall" ? (
  <div><i className="bi bi-arrow-right-square me-1"></i>Pared</div>
) : (
  <div><i className="bi bi-layers"></i> Suelo</div>
)}

          </div>
          
          <div className="text-sm mb-2">{model.category}</div>

          <div className="flex justify-start items-center gap-1">
            <i className="bi bi-clock text-xs"></i>
          <p className="text-sm font-bold text-gray-500 gap-2">{model.duration}</p>
          </div>

          <p className="mt-2 mb-5 text-gray-500 text-sm">{model.description}</p>


        <table className="rounded-2xl">
        <caption className="text-left font-bold mb-1">Herramientas</caption>
          <tbody>
            {model.tools.map((tool)=>{
              return (
                <tr className="border border-gray-300">
                  <td className="bg-slate-50 w-[10px]"><Checkbox></Checkbox></td>
                  <td className="p-1 bg-slate-50 w-full">{tool}</td>
                  <td className="p-1 bg-slate-50 text-gray-400 pe-3">x{1}</td>
                </tr>
              )
            })}
          </tbody>
        </table>


        <table className="rounded-2xl mt-4 mb-2">
        <caption className="text-left font-bold mb-1">Materiales</caption>
          <tbody>
            {model.materials.map((material)=>{
              return (
                <tr className="border border-gray-300">
                  <td className="bg-slate-50 w-[10px]"><Checkbox></Checkbox></td>
                  <td className="p-1 bg-slate-50 w-full">{material.name}</td>
                  <td className="p-1 bg-slate-50 text-gray-400 pe-3">x{material.number}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex w-full">
        <Button variant="contained" sx={{width:"100%"}} onClick={build} >Iniciar Contruccion</Button>
        </div>


        </div>

      

    </div>
  );
}
