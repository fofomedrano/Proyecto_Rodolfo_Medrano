import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contact from 'components/pages/Contact';
import Home from 'components/pages/Home';
import Resume from 'components/pages/Resume';
import Portfolio from 'components/pages/Portfolio';
import Blog from 'components/pages/Blog';
import Login from 'components/pages/Login';


const GlobalStyle = createGlobalStyle `
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #555;
  }
  h1, h2, h3 ,h4, h5, h6 {
    font-family: 'Roboto', sans-serif;}

  .container-fluid {
    padding-left: 0px;
    padding-right: 0px;
  }  
`
;

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {Home}/>  
        <Route exact path="/Resume" component = {Resume}/>
        <Route exact path="/Portfolio" component = {Portfolio}/>
        <Route exact path="/Blog" component = {Blog}/>   
        <Route exact path="/Contact" component = {Contact}/>   
        <Route exact path="/Login" component = {Login}/>        
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
