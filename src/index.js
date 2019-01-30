import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormContainer from './containers/FormContainer';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById(`formRoot`)
console.log(`ENV:`, process.env.NODE_ENV)


const renderApp = Component => render(
  <Component
    ref={(formComponent) => { window.formComponent = formComponent }}
  />,
  rootEl,
)

renderApp(FormContainer)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
