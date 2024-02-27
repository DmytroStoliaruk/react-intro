import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CatalogCard(data) {
  return (
    <Card sx={{ margin: '20px', borderRadius: '10px', border: '1px solid' }}>
      <Typography component="div" 
        sx={{ 
          backgroundColor: '#e0e0e0', 
          height: '35px', 
          display: 'flex', 
          alignItems: 'center', 
          paddingLeft: '10px' 
        }}>
        Item {data.index}
      </Typography>
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.imageUrl}
          alt="alt text"
          sx={{ width: '200px', height: '150px', marginTop: '15px', 
                display: 'block', marginLeft: 'auto', marginRight: 'auto'
        }}
        />
        <CardContent>
          <Typography  variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ width: '100%', textAlign: 'left', marginBottom: '40px' }}>
            {data.text}
          </Typography>     
          <Typography variant="body1" component="div" sx={{ width: '100%', marginTop: '10px', textAlign: 'left' }}>
            <b>Price:</b> <span style={{ marginLeft: '6rem' }}>${data.price}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size="small" variant="contained" style={{ width: '170px', height: '40px', borderRadius: '10px',  marginTop: '15px', marginBottom: '15px' }}> 
          View more
        </Button>
      </CardActions>
    </Card>
  );
}