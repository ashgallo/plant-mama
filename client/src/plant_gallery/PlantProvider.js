import React, { Component, createContext } from 'react';
import axiosLib from 'axios';

const axios = axiosLib.create({
  transformRequest: [data => {
    const formData = new FormData();
    for(let key in data){
      if(data.hasOwnProperty(key)){
        formData.append(key, data[key])
      }
    }
    return formData;
  }]
})

const url = "/api/plants";

const PlantContext = createContext();

export default class PlantProvider extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      loading: true,
      err: null
    }
    this._getPlantData = this._getPlantData.bind(this);
    this._deletePlantData = this._deletePlantData.bind(this);
    this._postPlantData = this._postPlantData.bind(this);
  }

  _postPlantData = (reqBody) => {
    axios.post(url, reqBody)
  }

  _getPlantData = () => {
    return axios.get(url).then(response => response.data)
  }

  // _putPlantData = _id => {
  //   axios.put(`/api/plants/${_id}`)
  //     .then(() => {

  //     })
  // }

  _deletePlantData = _id => {
    axios.delete(`/api/plants/${_id}`)
      .then(() => {
        const newArray = [...this.state.plants]
        const updateArray = newArray.filter(plant => plant._id !== _id);
        this.setState({
          plants: updateArray
        })
      }
    )
  }

  // handleCard(index) {
  //   return({ target }) => {
  //     this.setState({ currentPlant: target.value })
  //   }
  // }

  componentDidMount() {
    this._getPlantData()
    .then(plants => {
      this.setState({
        plants,
        loading: false,
        err: null
      })
    })
  }

  render() {
    return (
      <PlantContext.Provider
        value={{ ...this.state, _postPlantData: this._postPlantData, _deletePlantData: this._deletePlantData }}>  
        {this.props.children}
      </PlantContext.Provider>
    )
  }
}

export const withPlant = C => props => (
  <PlantContext.Consumer>
    {value => <C {...props} {...value} />}
  </PlantContext.Consumer>
)
