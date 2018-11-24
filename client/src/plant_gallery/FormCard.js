//display the form once card is clicked on (modal)
import React from 'react';
import Card from '@material-ui/core/Card';
import Form from './Form';
import { withStyles } from '@material-ui/core/styles';

const FormCard = () => (
  <Card style={styles}>
    <Form />
  </Card>
)

const styles = {
  height: 'auto',
  width: '15vw',
  borderRadius: '10px',
  margin: '10px',
  padding: '5px',
  backgroundColor: '#d8e2e8',
  color: '#132a48'
}

export default withStyles(styles)(FormCard);