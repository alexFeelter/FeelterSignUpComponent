import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { 
	KcApp, 
	defaultKcProps, 
	kcContext
  } from "keycloakify";
//   import { css } from "tss-react";
  
import './index.css';

console.log("kcContext ", kcContext)
ReactDOM.render(
	kcContext !== undefined ? 
	<KcApp 
		kcContext={ kcContext }
		{...{
			...defaultKcProps,
			"kcHeaderWrapperClass": "keycloakClass" 
		}}
	/> :
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
