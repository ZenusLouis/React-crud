import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api';
import './styles/delete.css';

const Delete: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<{ name: string; position: string; department: string } | null>(null);
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/employees/${id}`);
        setEmployee(response.data);
      } catch (err) {
        console.error('Error fetching employee:', err);
        setError('Error fetching employee details.');
      }
    };

    fetchEmployee();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/employees/${id}`);
      setIsDeleted(true);
      setMessage('Employee deleted successfully.');
      setTimeout(() => {
        navigate('/'); // Navigate to the home page after 1 second
      }, 1000);
    } catch (error) {
      console.error('Error deleting employee:', error);
      setError('Error deleting employee.');
    }
  };

  if (error) {
    return <div className="notification error">{error}</div>;
  }

  if (!employee && !isDeleted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="delete-container">
      {isDeleted ? (
        <div className="notification success">{message}</div>
      ) : (
        <div className="employee-details">
          <h2 className="title">Delete Employee</h2>
          <p className="confirmation-message">Are you sure you want to delete this employee?</p>
          <div className="employee-info">
            <div className="employee-info-item">
              <strong>Name:</strong> {employee?.name}
            </div>
            <div className="employee-info-item">
              <strong>Position:</strong> {employee?.position}
            </div>
            <div className="employee-info-item">
              <strong>Department:</strong> {employee?.department}
            </div>
          </div>
          <div className="button-container">
            <button className="delete-button" onClick={handleDelete}>Confirm Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
