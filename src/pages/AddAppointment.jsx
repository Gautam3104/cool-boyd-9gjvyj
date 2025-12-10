import React, { useState } from "react";
//AddAppointment.jsx
const AddAppointment = ({ setCurrentPage, onSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    dateTime: "",
    consultationType: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Date.now(),
      ...formData,
      status: "Scheduled",
    };
    onSubmit(newAppointment);
    setCurrentPage("appointment-list");
  };

  const handleCancel = () => {
    setCurrentPage("appointment-list");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Appointments</h2>
        <h3>Add New Appointment</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-section">
          <h4>General Information</h4>

          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Enter patient name"
              required
            />
          </div>

          <div className="form-group">
            <label>Doctor Name</label>
            <input
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              placeholder="Select doctor"
              required
            />
          </div>

          <div className="form-group">
            <label>Date & Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Consultation Type</label>
            <select
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              required
            >
              <option value="">Select consultation type</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any notes about the appointment"
              rows="4"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-save">
            Save
          </button>
          <button type="button" onClick={handleCancel} className="btn-cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAppointment;
