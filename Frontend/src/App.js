import React, {Component}from 'react';
import {BrowserRouter as Router,Route, HashRouter, Switch } from "react-router-dom";
import './scss/style.scss';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
//home
const Layout = React.lazy(() => import('./containers/Layout'));
//pages 
const SignIN = React.lazy(() => import('./views/pages/SignIn/Signin.js'));
const SignUP = React.lazy(() => import('./views/pages/SignUp/Signup.js'));

class App extends Component {

render() {
  return (
    <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact  path="/SignIN"  name="Login Page" render={props => <SignIN {...props}/>} />
            <Route exact path="/SignUP"  name="Register Page" render={props => <SignUP {...props}/>} />
            <Route  path="" name="Home"  render={props => <Layout {...props}/>} />
          
          </Switch>
        </React.Suspense>
    </HashRouter>
  );
}
}

export default App;
