import React, {Component} from 'react';
// import "./assets/css/index/public.css"
import Header from "./pages/component/Header.js"
import Content from "./pages/component/Content.js"
import Footer from "./pages/component/Footer.js"



class App extends Component {
  
  render(){
  return (
    <div className="App">
               <Header></Header>
              <Content></Content>
              <Footer></Footer>
              
    </div>
  );
}
  
}
export default App;
