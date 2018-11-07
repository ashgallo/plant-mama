import React from 'react';
import { withPlant } from './PlantProvider';
import PlantCard from './PlantCard';
import FormCard from './FormCard'
import Grid from '@material-ui/core/Grid';

const DisplayCards = ({plants, _deletePlantData}) => {
  const displayPlantInfo = plants.map(plant => (
    <PlantCard key={plant._id} id={plant._id} info={plant} deleteFunction={_deletePlantData} style={styles.plant}/> 
  ))
  return (
    <div style={styles.page}> 
      <Grid>
        <Grid item>
          <div style={styles.form}><FormCard /></div>
        </Grid>
        <Grid item style={styles.plant}>
          <div >{displayPlantInfo}</div>
        </Grid>
      </Grid>
    </div>
  )
}

  const styles = {
    page: {
      backgroundColor: '#d8d8d8'
    },
    form: {
      margin: '10px',
      textAlign: 'left'
    },
    plant: {
      margin: '10px'
    }
  }
  

export default withPlant(DisplayCards);