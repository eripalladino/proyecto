import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

const CardUser = ({char}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {char.image} sx= {{height: 250, width: 200}}
          alt="green iguana"
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
            <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUser;