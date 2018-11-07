import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Background from './background.jpg';

const Home = () => (
  <div style={styles.page}>
    <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={0}>
      <Grid item xs={12} md={12}>
        <img src={Background} alt="" style={styles.image}/>
        <div style={styles.button}>
          <Button component={Link} to='/gallery'>Enter</Button>
        </div>
      </Grid>
    </Grid>
  </div>
)

const styles = {
  page: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#d8d8d8'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'flex-end',
    left: '90%',
  }
}

export default Home;