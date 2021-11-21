import Home from "./pages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Questions from "./pages/Questions";
import { AppContextProvider } from "./contexts";
import Result from "./pages/result";
function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
