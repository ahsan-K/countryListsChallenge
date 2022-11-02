import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

type props = {
  item: any;
  index?: number;
  key?: number;
  colorMode: any
}

export default function MediaCard({ item, colorMode }: props) {
  const Theme = styled(Paper)(({ theme }) => ({
    backgroundColor: colorMode?.currentTheme === 'dark' ? 'hsl(209, 23%, 22%)' : '#fff',
    height:'100%'
}));
  return (
    <Card sx={{
      height: 300, '&:hover': {
        opacity: [0.9, 0.8, 0.7],
      }
    }}>
      <CardMedia
        component="img"
        height="140"
        image={item?.flags?.png}
        alt="green iguana"
      />
      <Theme>
      <CardContent>
        <Typography fontWeight="bold" style={{color:colorMode?.currentTheme === 'dark' ? "#fff" : "#000"}} textAlign="left" gutterBottom variant="h5" component="div">
          {item?.name?.common}
        </Typography>
        <h5 className={colorMode?.currentTheme === 'dark' ? "card-flagContent colorWhite" : "card-flagContent"}>Population: <span style={{ fontWeight: 'normal' }}>{item?.population}</span></h5>
        <h5 className={colorMode?.currentTheme === 'dark' ? "card-flagContent colorWhite" : "card-flagContent"}>Region: <span style={{ fontWeight: 'normal' }}>{item?.region}</span></h5>
        <h5 className={colorMode?.currentTheme === 'dark' ? "card-flagContent colorWhite" : "card-flagContent"}>Capital: <span style={{ fontWeight: 'normal' }}>{item?.capital ? item?.capital[0] : ""}</span></h5>
      </CardContent>
      </Theme>
    </Card>
  );
}
