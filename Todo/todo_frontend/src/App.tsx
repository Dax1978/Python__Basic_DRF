import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation'
import { PageAbout } from './pages/PageAbout'
import { PageProject } from './pages/PageProject';
import { PageProjects } from './pages/PageProjects';
import { PageUnknow } from './pages/PageUnknow'
import { PageUsers } from './pages/PageUsers'
import { PageTasks } from './pages/PageTasks'
import { PageTask } from './pages/PageTask'
import axios from 'axios'
import Cookies from 'universal-cookie';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PageUnknow />} />
        <Route path="/users" element={<PageUsers />} />
        <Route path="/users/:id" element={<PageUsers />} />
        <Route path="/projects" element={<PageProjects />} />
        <Route path="/projects/:id" element={<PageProject />} />
        <Route path="/tasks" element={<PageTasks />} />
        <Route path="/tasks/:id" element={<PageTask />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App