import { ApiContext } from './compontents/GetApi.js';
import {useContext}from'react';
import Header from './compontents/Header.js';
import'./App.css'
import Displaypage from './compontents/Displaypage.js';
function App() {
  const {isLoading}=useContext(ApiContext)
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
	return(
			<div className="homee">
        <Header/>
        <Displaypage/>
			</div>	 
		)
}

export default App;
