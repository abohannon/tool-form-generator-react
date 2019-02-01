import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root'
import FormContainer from './containers/FormContainer';

const rootEl = document.getElementById(`formRoot`)
console.log(`ENV:`, process.env.NODE_ENV)

const renderApp = Component => render(
  <Root>
    <Component
      ref={(formComponent) => { window.formComponent = formComponent }}
    />
  </Root>,
  rootEl,
)

renderApp(FormContainer)

