function EmployeeProfile() {
  const employee = {
    name: 'Abc',
    department: 'IT',
    designation: 'Devloper',
    email: 'abc@gmail.com',
  };

  return (
    <div className="card p-4">
      <h3>Employee Profile</h3>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Designation:</strong> {employee.designation}</p>
      <p><strong>Email:</strong> {employee.email}</p>
    </div>
  );
}

export default EmployeeProfile;
