import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "https://max-mcg-portfolio.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
