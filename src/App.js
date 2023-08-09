import { ApiContext } from './compontents/GetApi.js';
import {useContext}from'react';
import Header from './compontents/header.js';
import'./App.css'
function App() {
  const {isLoading}=useContext(ApiContext)
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
	return(
			<div className="homee">
        <Header/>
			</div>	 
		)
}

export default App;
