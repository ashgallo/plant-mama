import React from 'react';
import Card from '@material-ui/core/Card';

//single card & what you want to display on the individual card
//need edit & delete when details display
export default function PlantCard({deleteFunction, info: {_id, image, name, water, light, fertilize, datePlanted, notes}}) {
  return(
    <Card style={styles.background}>
        <div>
          <img src={`/api/plants/images/${image.filename}`} alt="" style={styles.image}/>
        </div>
        <h1>{name}</h1>
        <h4>{water}</h4>
        <h4>{light}</h4>
        <h4>{fertilize}</h4>
        <h4>{datePlanted}</h4>
        <h4>{notes}</h4>
        <button onClick={() => deleteFunction(_id)}>Delete</button>
      
    </Card>
  )
}

const styles = {
  image: {
    width: '75px',
    height: 'auto'
  },
  background: {
    width: '15vw',
    borderRadius: '10px',
    padding: '10px',
    backgroundColor: '#d8e2e8',
    color: '#132a48'
  }
}
