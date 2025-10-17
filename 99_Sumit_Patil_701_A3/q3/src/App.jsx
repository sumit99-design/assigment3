import { Routes, Route, Link } from 'react-router-dom';
import EmployeeProfile from './EmployeeProfile';
import LeaveApplication from './LeaveApplication';

function App() {
  return (
    <div className="container mt-4">
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2">Employee Profile</Link><br/>
        <Link to="/leave" className="btn btn-secondary me-2">Leave Application</Link>
      </nav>

      <Routes>
        <Route path="/" element={<EmployeeProfile />} />
        <Route path="/leave" element={<LeaveApplication />} />
      </Routes>
    </div>
  );
}

export default App;
