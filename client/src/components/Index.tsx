import React, { useEffect, useState } from 'react';
import axios from '../api';
import { Link } from 'react-router-dom';
import './styles/index.css';

interface Employee {
  _id: string;
  name: string;
  position: string;
  department: string;
}

const Index: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [notification, setNotification] = useState<string>('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get<Employee[]>('/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/employees/${id}`);
      setEmployees(employees.filter(employee => employee._id !== id));
      setNotification('Employee deleted successfully.');
    } catch (error) {
      console.error('Error deleting employee:', error);
      setNotification('Error deleting employee.');
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      {notification && <div className="notification">{notification}</div>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button><Link to={`/edit/${employee._id}`} style={{ color: "#000", textDecoration: "none"}}>Edit</Link></button>
                {' | '}
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
