import './App.css';
import Nav from './components/nav';
import Top from './components/top';
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="padding"></div>
      {/* <Top></Top> */}
      <Carousel></Carousel>
    </div>
  );
}

export default App;
