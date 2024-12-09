import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import  Tag  from '@mui/icons-material/Tag';

export default function ActionAreaCard() {

  return (
    <Card sx={{ width: "175px" }} variant='outlined'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography  variant="h6" component="div">
            Lizard
          </Typography>
          <Chip icon={<Tag/>} label="With Icon" variant="outlined" size='small'/>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Un Gatito gordito
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
