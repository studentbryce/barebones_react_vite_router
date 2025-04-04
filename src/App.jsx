import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import One from './One';
import Two from './Two';
import Three from './Three';

function App() {
  return(
    <>
    <h1>BareBones react App</h1>
    <Router>
      <Nav />
      <Routes>
        <Route path= "/One" element={<One/>}/>
        <Route path= "/Two" element={<Two/>}/>
        <Route path= "/Three" element={<Three/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App
