import React from 'react';
import axios from '../api';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Delete = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const handleDelete = async () => {
    try {
      await axios.delete(`/employees/${id}`);
      navigate('/'); // Navigate to the home page after deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete this employee?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Delete;
