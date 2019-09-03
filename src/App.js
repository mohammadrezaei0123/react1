import React from 'react';
import logo from './logo.svg';
import 'animate.css/animate.css'
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Components/Contents/Menu';
import CardComponent from './Components/other/Card';
import CardContent from './Components/Contents/CardContent';
import SearchContent from './Components/Contents/SearchContent';
import menus from './data/menu.json'
import ServiceContent from './Components/Contents/ServiceContent';
import MainFooterContent from './Components/Contents/MainFooterContent';
import TemeFooterContent from './Components/Contents/TemeFooterContent';
import PopularContent from './Components/Contents/PopularContent';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showInputMenu:false,
      countNode:3
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.windowResize = this.windowResize.bind(this);
    this.mainContent = React.createRef();
  }
  windowResize(){
    let windowHeight=window.innerWidth
    if(windowHeight>980){
      this.setState({
        countNode:3
      })
    }else if(windowHeight>720){
      this.setState({
        countNode:2
      })
    }else if(windowHeight>540){
      this.setState({
        countNode:1
      })
    }else{
      this.setState({
        countNode:1
      })
    }
  }
  componentDidMount() {
    this.windowResize()
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize',this.windowResize)
    let heightMenu=document.getElementById("menus").offsetHeight;
    document.getElementById("main-contents").style.marginTop=heightMenu+"px"
    // this.refs.mainContent.style.marginTop=heightMenu+"px"
}
componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
}

handleScroll(event) {
    let  scrollTop1 = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop1>5){
    document.getElementById("menus").classList.add("menu-shadow");
    }else{
      document.getElementById("menus").classList.remove("menu-shadow")
    }
    
          
let element = document.getElementById("inside-menu");
if(element){
        if(element.offsetTop-20>scrollTop1){
          this.setState({
            showInputMenu:false
          })
        }else{
          this.setState({
            showInputMenu:true
          })
        }
      }
}
  render(){
    return (
      <>
      <Menu showInputMenu={this.state.showInputMenu}></Menu>
      <div className="m-0 container-fluid p-0" id="main-contents">
        <SearchContent>

        </SearchContent>
        <CardContent countNode={this.state.countNode} menus={menus}></CardContent>
        <ServiceContent></ServiceContent>
        <PopularContent></PopularContent>
        <CardContent countNode={this.state.countNode} menus={menus}></CardContent>
        <div className="m-0 bg-dark d-flex flex-column">
        <div style={{
          flex:1
          }}><MainFooterContent></MainFooterContent></div> 
        <div style={{
          flex:1
          }}><TemeFooterContent></TemeFooterContent></div> 
          
        </div>
      </div>
      </>
    );
  }
}

export default App;
