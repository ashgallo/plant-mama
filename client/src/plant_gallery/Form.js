import React, { Component, createRef } from 'react';
import {withPlant} from './PlantProvider';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      name: "",
      water: "",
      light: "",
      fertilize: "",
      datePlanted: Date,
      notes: ""
    };
    this.uploader = createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;
    this.setState( {[name]: value} );
  }

  handleSubmit(e) {
    e.preventDefault();
    const reqBody = {...this.state, image: this.uploader.current.files[0]}
    this.props._postPlantData(reqBody)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h5>Image:</h5>
          <input ref={this.uploader} name="image" type="file" value={this.state.image} onChange={this.handleChange} />
        </label>
        <label>
        <h5>Name:</h5> 
          <input name="name" type="text" onChange={this.handleChange} />
        </label>
        <label>
        <h5>Water:</h5> 
          <input name="water" type="radio" value="sparingly" onChange={this.handleChange} checked={this.state.water === "sparingly"} /> Sparingly
          <input name="water" type="radio" value="as needed" onChange={this.handleChange} checked={this.state.water === 'as needed'} /> Medium
          <input name="water" type="radio" value="often" onChange={this.handleChange} checked={this.state.water === 'often'} /> Often
        </label>
        <label>
        <h5>Light:</h5> 
          <input name="light" type="radio" value="low" onChange={this.handleChange} checked={this.state.light === 'low'} /> Low
          <input name="light" type="radio" value="medium" onChange={this.handleChange} checked={this.state.light === 'medium'} /> Medium
          <input name="light" type="radio" value="bright, indirect" onChange={this.handleChange} checked={this.state.light === 'bright, indirect'} /> Bright, Indirect
          <input name="light" type="radio" value="bright, direct" onChange={this.handleChange} checked={this.state.light === 'bright, direct'} /> Bright, Direct
        </label>
        <label>
        <h5>Fertilize:</h5>
          <input name="fertilize" type="radio" value="monthly" onChange={this.handleChange} checked={this.state.fertilize === 'monthly'} /> Monthly 
          <input name="fertilize" type="radio" value="quarterly" onChange={this.handleChange} checked={this.state.fertilize === 'quarterly'} /> Quarterly
          <input name="fertilize" type="radio" value="annually" onChange={this.handleChange} checked={this.state.fertilize === 'annually'} /> Annually
        </label>
        <label><h5>Date Planted:</h5><input name="datePlanted" type="date" onChange={this.handleChange} /></label>
        <label><h5>Notes:</h5><input name="notes" type="text" onChange={this.handleChange} /></label>
        <button onSubmit={this.handleSubmit}>Add</button>
      </form>
    )
  }
}

export default withPlant(Form)



