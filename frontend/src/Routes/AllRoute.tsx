import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../Pages/RegistrationPage';
import LoginPage from '../Pages/LoginPage';
import MultiStepFormPage from '../Pages/MultiStepFormPage';
import SubmissionTablePage from '../Pages/SubmissionTablePage';

const AllRoute: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/multiform" element={<MultiStepFormPage />} />
        <Route path="/submissiontable" element={<SubmissionTablePage />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
