import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  Chip  from '@mui/material/Chip';
import  SellIcon  from '@mui/icons-material/Sell';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import "@google/model-viewer"


export default function RecipeReviewCard({model,setView,setTitle,setModel}) {
  const [expanded, setExpanded] = React.useState(false);


  const showAlert =()=>{
    setTitle("Detalles")
    setView(5);
    setModel(model);
  }

  return (
    <Card sx={{ width:"95%" }} variant='outlined'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <div>
             <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </div>
        }
        title={model.name}
        subheader={
        <p className='text-xs'>{model.duration}</p>
      }
      />
      <div className='bg-slate-200 flex items-center justify-center h-[300px] w-full' onClick={showAlert}>
        <img src={model.preview} alt="" />
      </div>
      
    </Card>
  );
}
