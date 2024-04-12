import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';


const card = (
  <React.Fragment>
        <Card style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Would you rather?
          </Typography>
          <br />
          <Typography variant="h5" component="div">
            Would you rather have super strength or be invisible?
          </Typography>
            <br />
            </CardContent>
            <CardActions>
              <Button variant="contained" style={{maxWidth: '30%', maxHeight: '30%', minWidth: '30%', minHeight: '30%'}}>Super Strength!</Button>
              <Box sx={{ width: 3/4, boxShadow: 1}}>
                <LinearProgress variant="determinate" value={55} />
              </Box>
            </CardActions>
            <CardActions>
              <Button variant="contained" style={{maxWidth: '30%', maxHeight: '30%', minWidth: '30%', minHeight: '30%'}}>Invisibility!</Button>
              <Box sx={{ width: 3/4, boxShadow: 1}}>
                <LinearProgress variant="determinate" value={45} />
              </Box>
            </CardActions>
            </Card>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
        <Card style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Movies!
          </Typography>
          <br />
          <Typography variant="h5" component="div">
            Which Lord of the Rings movie is the best?
          </Typography>
            <br />
            </CardContent>
            <CardActions>
              <Button variant="contained" style={{maxWidth: '30%', maxHeight: '30%', minWidth: '30%', minHeight: '30%'}}>Fellowship of the Ring</Button>
              <Box sx={{ width: 3/4, boxShadow: 1}}>
                <LinearProgress variant="determinate" value={40} />
              </Box>
            </CardActions>
            <CardActions>
              <Button variant="contained" style={{maxWidth: '30%', maxHeight: '30%', minWidth: '30%', minHeight: '30%'}}>The Two Towers</Button>
              <Box sx={{ width: 3/4, boxShadow: 1}}>
                <LinearProgress variant="determinate" value={30} />
              </Box>
            </CardActions>
            <CardActions>
              <Button variant="contained" style={{maxWidth: '30%', maxHeight: '30%', minWidth: '30%', minHeight: '30%'}}>Return of the King</Button>
              <Box sx={{ width: 3/4, boxShadow: 1}}>
                <LinearProgress variant="determinate" value={30} />
              </Box>
            </CardActions>
            </Card>
  </React.Fragment>
);





export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}