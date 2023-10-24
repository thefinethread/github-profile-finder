import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GithubContextProvider } from './contexts/github/GithubContext';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <GithubContextProvider>
      <Router>
        <div className="flex">
          <Navbar title="Github Profile Finder" />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubContextProvider>
  );
};

export default App;
