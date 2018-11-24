import React from 'react';
import { withPlant } from './PlantProvider';
import PlantCard from './PlantCard';
import FormCard from './FormCard'

const DisplayCards = ({plants, _deletePlantData}) => {
  const displayPlantInfo = plants.map(plant => (
    <PlantCard key={plant._id} id={plant._id} info={plant} deleteFunction={_deletePlantData} style={styles.plant}/> 
  ))
  return (
    <div style={styles.container}>
      <FormCard />
      {displayPlantInfo}
    </div>
  )
}

const styles = {
  plant: {
    margin: '10px',
    gridRowStart: 2,
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '40px 10px',
    backgroundColor: '#d8d8d8'
  }
}
  

export default withPlant(DisplayCards);