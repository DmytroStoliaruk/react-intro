import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemMain({ imageUrl, title, text }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '20px' }}>
      <CardMedia
        component="img"
        alt={title}
        image={imageUrl}
        sx={{ width: 300, paddingLeft: '15%', paddingRight: '50px' }}
      />
      <CardContent sx={{ textAlign: 'left', paddingRight: '15%' }}>
        <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body1">
          {text}
        </Typography>
      </CardContent>
    </div>
  );
}

export default ItemMain;