import Home from "./pages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Questions from "./pages/Questions";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questions' element={<Questions />} />
        {/* <Route path='/result' element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
