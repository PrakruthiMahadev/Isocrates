import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NewComponent from './components/NewComponent';
import NewClassComponent from './components/NewClassComponent';
import PropComponent from './components/PropComponent';



function Home() {
  return <h1>Welcome to the Home page</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>  <Link to="/new">New Component</Link></li>
            <li>  <Link to="/class">New Class Component</Link></li>
            <li>  <Link to="/prop-component">Prop Component</Link></li>
          </ul>
        </nav>
        <h1>Hello isoc</h1>
      </div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/new" element={<NewComponent />} />
        <Route path="/class" element={<NewClassComponent />} />
        <Route path="/prop-component" element={<PropComponent />} />
        <Route path="/" element={ <Navigate to="/"replace />}/>
      </Routes>
    </Router>
  );
}

export default App;