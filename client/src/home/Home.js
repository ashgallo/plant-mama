import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Plant from './plant.jpeg';
import Logo from './logo.jpg';

function Home() {
  return (
    <div>
    <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={0}>
      <Grid item xs={12} md={4}>
        <img src={Plant} alt="" style={styles.image}/>
      </Grid>
      <Grid item xs={12} md={8}>
        <img src={Logo} alt="" style={styles.image}/>
      </Grid>
    </Grid>
    <Button component={Link} to='./plant_index/PlantIndex'>Enter</Button>
    </div>
  )
}

const styles = {
  image: {
    width: '100%',
    height: '100%'
  }
}

export default Home;