import React from "react";

const ViewAppointment = ({ appointment, setCurrentPage }) => {
  const handleEdit = () => {
    setCurrentPage("edit-appointment");
  };

  const handleBack = () => {
    setCurrentPage("appointment-list");
  };

  if (!appointment) {
    return <div className="page-container">No appointment selected</div>;
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Appointments</h2>
        <h3>Appointment Details</h3>
      </div>

      <div className="view-container">
        <div className="info-section">
          <h4>General Information</h4>

          <div className="info-group">
            <label>Patient Name</label>
            <p>{appointment.patientName}</p>
          </div>

          <div className="info-group">
            <label>Doctor Name</label>
            <p>{appointment.doctorName}</p>
          </div>

          <div className="info-group">
            <label>Date & Time</label>
            <p>{appointment.dateTime}</p>
          </div>

          <div className="info-group">
            <label>Status</label>
            <p>
              <span className={`status ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </span>
            </p>
          </div>

          <div className="info-group">
            <label>Consultation Type</label>
            <p>{appointment.consultationType}</p>
          </div>

          {appointment.notes && (
            <div className="info-group">
              <label>Notes</label>
              <p>{appointment.notes}</p>
            </div>
          )}
        </div>

        <div className="view-actions">
          <button onClick={handleEdit} className="btn-edit">
            Edit
          </button>
          <button onClick={handleBack} className="btn-back">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
