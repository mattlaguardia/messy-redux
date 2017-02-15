import React, { Component } from "react"
import $ from "jquery"
import App from '../partials/dropbox'


// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // COMPONENT STATE DECLARTION HERE
    }
  }
  //LOGIC HERE: CHECK OUT COMPONENT MOUNTING IF YOU WANT TO TRY IT OUT

  render(){
    //RENDER LOGIC HERE

    return(
      <div class="sixteen">
        <section class="hero electric-blue-light-background text-center">
          <h1 class="hh heroH1">React Boilerplate</h1>
          <h6 class="gray text-center hh heroH6">Start building with React today!</h6>
          <h6 class="gray text-center hh heroH6">Messy Redux</h6>
          <App />
        </section>
      </div>
    )
  }
}
