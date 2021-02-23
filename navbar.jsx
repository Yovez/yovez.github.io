'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="w3-bar-block" >
         <a href="#" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</a>
            <a href="/aboutme/" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white float">About Me</a>
          <a href="#showcase" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white float">Showcase</a>
         <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white float">Contact</a>
        </div>
    );
  }
}

let domContainer = document.querySelector('#nav-bar');
ReactDOM.render(<NavBar />, domContainer);