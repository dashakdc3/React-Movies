// import Movies from './components/movies'

// function App() {
//   return (
//     <main className='container'>
//       <Movies/>
//     </main>
//   );
// }

// export default App;


import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
// Navigate (before redirect), Routes (before switch)
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import "./App.css";
import Joi from "joi-browser";
import Form from "./commonComponents/form";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            {/*  the first router that matches will be used */}
            <Route path="/movies/:id" element={<Form inner={MovieForm}/>}/>
            {/* <Route path="/movies/:id" render={(props) => <MovieForm anotherParam={} {...props}/>}*/}
            {/* {...props}/>} to save location, history and match */}
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/rentals" element={<Rentals/>} />
            <Route path="/not-found" element={<NotFound/>} />
            <Route path="/" exact element={<Navigate to="/movies" />}/>
            {/* <Navigate from="/" exact to="/movies" /> */}
            {/* if smb goes to / he will be redirected to /movies */}
            <Route path="*" element={<Navigate to="/not-found" />}/>
            {/* <Navigate to="/not-found" /> */}
            {/* for redirection, but we have to explisitly specify what we whant to see at /not-found  by creating Route path="/not-found"*/}
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
