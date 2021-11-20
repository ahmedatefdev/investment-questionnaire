import Home from "./pages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
