import React, { useState } from "react";
//AppointmentManager.jsx
const AppointmentManager = ({ setCurrentPage, setSelectedAppointment }) => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      doctorName: "Dr. Smith",
      dateTime: "2024-12-15 10:00 AM",
      status: "Scheduled",
      consultationType: "General Checkup",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      doctorName: "Dr. Johnson",
      dateTime: "2024-12-16 2:30 PM",
      status: "Scheduled",
      consultationType: "Follow-up",
    },
    {
      id: 3,
      patientName: "Mike Johnson",
      doctorName: "Dr. Williams",
      dateTime: "2024-12-17 11:00 AM",
      status: "Completed",
      consultationType: "Consultation",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setCurrentPage("edit-appointment");
  };

  const handleView = (appointment) => {
    setSelectedAppointment(appointment);
    setCurrentPage("view-appointment");
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((apt) => apt.id !== id));
  };

  const handleAddNew = () => {
    setCurrentPage("add-appointment");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Appointments</h2>
        <h3>Appointment List</h3>
      </div>

      <div className="list-controls">
        <input
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleAddNew} className="add-button">
          +
        </button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>PATIENT NAME</th>
            <th>DOCTOR NAME</th>
            <th>DATE & TIME</th>
            <th>STATUS</th>
            <th>TYPE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.dateTime}</td>
              <td>
                <span className={`status ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </span>
              </td>
              <td>{appointment.consultationType}</td>
              <td>
                <button
                  onClick={() => handleView(appointment)}
                  className="btn-view"
                >
                  View
                </button>
                <button
                  onClick={() => handleEdit(appointment)}
                  className="btn-edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentManager;
