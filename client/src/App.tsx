import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Add from './components/Add';
import Index from './components/Index';
import Edit from './components/Edit';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="heading">Employee Management</h1>
        <nav className="nav">
          <Link to="/">Employee List</Link>
          <Link to="/add">Add New Employee</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
