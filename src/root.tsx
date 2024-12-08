import { Navigate, HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import PeoplePage from './pages/PeoplePage';
import HomePage from './pages/HomePage';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="people/:person?">
            <Route index element={<PeoplePage />} />
            <Route path=":person" element={<PeoplePage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="home" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
