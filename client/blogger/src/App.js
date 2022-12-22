import logo from './logo.svg';
import './App.css';
import Header from "./comp/Header "
import {Routes,Route} from "react-router-dom"
import Display from "./comp/Display"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<Display/>} />
        <Route path = "/Disp:id" element = {<Display/>} />
        <Route path = "/" element = {<Display/>} />
      </Routes>
      <Display />
    </div>
  );
}

export default App;
