import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PlantProvider from './plant_gallery/PlantProvider';
import App from './App';

render(
  <BrowserRouter>
    <PlantProvider>
      <App />
    </PlantProvider>
  </BrowserRouter>,
  document.getElementById("root")
)

