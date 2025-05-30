import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./pages/Search";
import Home from "./pages/Home";
import NavBar from './components/NavBar';


function App() {

  return (
    <>
      <div className="min-h-screen w-screen">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Router >
      </div>
    </>
  )
}

export default App
