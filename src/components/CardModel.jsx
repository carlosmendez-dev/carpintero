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
import "@google/model-viewer"
import { Height } from '@mui/icons-material';


export default function RecipeReviewCard({model}) {
  const [expanded, setExpanded] = React.useState(false);


  const showAlert =()=>{
    alert("Hola Mundo")
  }

  return (
    <Card sx={{ maxWidth: 400 }} variant='outlined' onClick={showAlert}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={model.name}
        subheader={
          <div className='flex justify-start items-center gap-0.5'>
            <i className='bi bi-tag text-[12px]'></i>
        <p className='text-sm text-opacity-10'>{model.category}</p>
          </div>
      }
      />
      <div className='bg-slate-200 flex items-center justify-center'>
      <model-viewer src={model.model} ios-src={model.model}  ar auto-rotate autoplay camera-controls></model-viewer>
      </div>
      <CardContent>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      
    </Card>
  );
}
