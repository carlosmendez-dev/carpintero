import  IconButton  from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ButtonBack({setView, indexView}) {

    const changeView = () =>{
        setView(indexView)
    }

  return (
    <div className="fixed left-2 top-16">
    <IconButton onClick={changeView}>
      <ArrowBackIcon />
    </IconButton>
    </div>
  );
}
