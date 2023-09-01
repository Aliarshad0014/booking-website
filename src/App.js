import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Slider from './Components/Slider';
import Packages from './Components/Packages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dresses from './Components/Dresses';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/" element={<Slider />} /> */}
            {/* <Route path="/" element={<Packages />} /> */}
            <Route path="/dresses" element={<Dresses />} />
            {/* Other routes */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;