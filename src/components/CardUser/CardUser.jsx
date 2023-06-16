import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({ char }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={char.thumbnail} sx={{ height: 250, width: 200 }}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {char.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {char.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${char.price} 
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUser;