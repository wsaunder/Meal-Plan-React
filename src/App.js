import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/DashBoard'
import MealDetails from './components/meals/MealDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AddMeal from './components/meals/AddMeal'
import AddGrocery from './components/groceries/AddGrocery'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/meal/:id' component={MealDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/newmeal' component={AddMeal} />
          <Route path='/addgrocery' component={AddGrocery} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

