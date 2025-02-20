import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { default as ActionButton } from '../src/components/ActionButton';
export { default as Button } from '../src/components/Button';
export { default as InfoBar } from '../src/components/InfoBar';
export { default as LabelValue } from '../src/components/LabelValue';
export { default as ShiftDetailsWithTime } from '../src/components/ShiftDetailsWithTime';
export { default as ShiftDetails } from '../src/components/ShiftDetails';