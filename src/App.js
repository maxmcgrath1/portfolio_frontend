import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "https://max-mcg-portfolio.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects"  element={<Projects URL={URL} />} />
        <Route path="/about"  element={<About URL={URL} />} />
      </Routes>
    </div>
  );
}


export default App;
