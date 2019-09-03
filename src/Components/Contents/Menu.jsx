
import React from 'react';
import InputSearch from '../other/InputSearch';
class Menu extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let animationClassName = (this.props.showInputMenu) ? "animated fadeInLeft fast flex-fill" : "animated fadeOutright fast flex-fill"
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3 fixed-top" id="menus">
        <a className="navbar-brand" href="#">
          <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         {this.props.showInputMenu && (
            <form className=" d-flex flex-fill " 
            style={{
              paddingRight:"21%"
            }}>
              <InputSearch animationClassName={animationClassName}></InputSearch>
              
            </form>
          )}
           <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">sing in
              </a>
            </li>
          </ul>
          
        </div>
      </nav>
    );
  }
}

export default Menu;