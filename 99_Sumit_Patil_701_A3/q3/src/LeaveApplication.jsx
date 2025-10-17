import { useState } from 'react';

function LeaveApplication() {
  const [leaveList, setLeaveList] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    reason: '',
    grant: 'No',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLeaveList([...leaveList, formData]);
    setFormData({ date: '', reason: '', grant: 'No' });
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  return (
    <div>
      <h3>Leave Application</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="form-control mb-2"
        /><br/><br/>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Reason for leave"
          required
          className="form-control mb-2"
        /><br/><br/>
        <select name="grant" value={formData.grant} onChange={handleChange} className="form-select mb-2">
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select><br/><br/>
        <button type="submit" className="btn btn-primary">Add Leave</button>
      </form>

      <h4>Applied Leaves</h4>
      {leaveList.length === 0 ? (
        <p>No leave applications yet.</p>
      ) : (
        <ul className="list-group">
          {leaveList.map((leave, index) => (
            <li key={index} className="list-group-item">
              <strong>Date:</strong> {leave.date} | <strong>Reason:</strong> {leave.reason} | <strong>Grant:</strong> {leave.grant}
            </li>
          ))}
        </ul>
      )}

      <button className="btn btn-danger mt-4" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LeaveApplication;
