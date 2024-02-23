import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ItemCard({ imageUrl, title, text }) {
  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="caption">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;