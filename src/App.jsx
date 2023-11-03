import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GithubContextProvider } from './contexts/github/GithubContext';
import { AlertContextProvider } from './contexts/alerts/AlertContext';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <GithubContextProvider>
      <AlertContextProvider>
        <Router>
          <div className="flex">
            <Navbar title="Github Profile Finder" />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/users/:login" element={<User />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubContextProvider>
  );
};

export default App;
