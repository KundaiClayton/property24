import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import SignIn from './Components/Authorisation/SignIn';
import SignUp from './Components/Authorisation/SignUp';
import PropertyView from './Components/Dashboard/PropertyView'
import PropertyDetails from './Components/Properties/PropertyDetails'
import search from './Components/search/search'

function App() {
  
  return(
    <BrowserRouter>
    <div className="App">
    
      <Navbar/>
    
      <Switch>
        <Route exact path='/' component={PropertyView}/>
        <Route path='/property/:id' component={PropertyDetails}/>
        <Route  path='/login' component={SignIn}/>
        <Route  path='/registration' component={SignUp}/>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
