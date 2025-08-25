import React, { useEffect, useState } from "react";
// Import axios for HTTP requests
import axios from "axios";
// Import Formik components for form handling
import { Formik, Form, Field, ErrorMessage } from "formik";
// Import Yup for validation schema
import * as Yup from "yup";
// Import Bootstrap components
import { Table, Button, Alert } from "react-bootstrap";

// Define validation rules for form fields using Yup
const PlayerSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Required"), // name must be at least 3 chars
  age: Yup.number().min(16).max(40).required("Required"), // age must be between 16 and 40
  position: Yup.string().required("Required"), // cannot be empty
  club: Yup.string().required("Required"), // cannot be empty
  nationality: Yup.string().required("Required"), // cannot be empty
  goals: Yup.number().min(0).required("Required"), // goals must be non-negative
  matchesPlayed: Yup.number().min(0).required("Required"), // matches played must be non-negative
  jerseyNumber: Yup.number().min(1).max(99).required("Required"), // jersey between 1–99
  email: Yup.string().email("Invalid email").required("Required"), // must be valid email
  contactNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Must be 10 digits starting with 6-9") // regex for Indian mobile numbers
    .required("Required"), // cannot be empty
});

const FootballPlayerManagement = () => {
  // State variable to hold list of players
  const [players, setPlayers] = useState([]);
  // State variable to hold the player currently being edited
  const [editPlayer, setEditPlayer] = useState(null);
  // State variable to show success messages
  const [message, setMessage] = useState("");

  // Function to get players from JSON server
  const fetchPlayers = async () => {
    const res = await axios.get("http://localhost:5000/players"); // GET request
    setPlayers(res.data); // update state with response data
  };

  // useEffect hook to fetch data when component loads
  useEffect(() => {
    fetchPlayers(); // call fetchPlayers only once on mount
  }, []);

  // Function to handle adding new player
  const handleAdd = async (values, { resetForm }) => {
    await axios.post("http://localhost:5000/players", values); // POST request
    setMessage("Player added successfully!"); // show success message
    fetchPlayers(); // refresh list
    resetForm(); // clear form inputs
    setTimeout(() => setMessage(""), 3000); // clear message after 3 seconds
  };

  // Function to handle updating existing player
  const handleUpdate = async (values, { resetForm }) => {
    if (editPlayer) {
      await axios.put(`http://localhost:5000/players/${editPlayer.id}`, values); // PUT request
      setMessage("Player updated successfully!"); // show success message
      setEditPlayer(null); // clear edit state
      fetchPlayers(); // refresh list
      resetForm(); // clear form inputs
      setTimeout(() => setMessage(""), 3000); // clear message after 3 seconds
    }
  };

  // Function to handle deleting a player
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/players/${id}`); // DELETE request
    setMessage("Player deleted successfully!"); // show success message
    fetchPlayers(); // refresh list
    setTimeout(() => setMessage(""), 3000); // clear message after 3 seconds
  };

  return (
    <div className="container mt-4">
      {/* Heading */}
      <h2 className="text-center">⚽ Football Player Management System</h2>

      {/* Success Message */}
      {message && <Alert variant="success">{message}</Alert>}

      <Formik
        // Initial form values (use editPlayer if editing, otherwise blank)
        initialValues={{
          name: editPlayer?.name || "",
          age: editPlayer?.age || "",
          position: editPlayer?.position || "",
          club: editPlayer?.club || "",
          nationality: editPlayer?.nationality || "",
          goals: editPlayer?.goals || "",
          matchesPlayed: editPlayer?.matchesPlayed || "",
          jerseyNumber: editPlayer?.jerseyNumber || "",
          email: editPlayer?.email || "",
          contactNumber: editPlayer?.contactNumber || "",
        }}
        enableReinitialize // allows form to update when editPlayer changes
        validationSchema={PlayerSchema} // apply Yup schema
        onSubmit={editPlayer ? handleUpdate : handleAdd} // if editing -> update, else -> add
      >
        {/* Destructure handleSubmit from Formik */}
        {({ handleSubmit }) => (
          <Form className="row g-3" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="col-md-6">
              <label>Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            {/* Age Field */}
            <div className="col-md-3">
              <label>Age</label>
              <Field name="age" type="number" className="form-control" />
              <ErrorMessage name="age" component="div" className="text-danger" />
            </div>

            {/* Position Dropdown */}
            <div className="col-md-3">
              <label>Position</label>
              <Field as="select" name="position" className="form-control">
                <option value="">Select</option>
                <option>Forward</option>
                <option>Midfielder</option>
                <option>Defender</option>
                <option>Goalkeeper</option>
              </Field>
              <ErrorMessage name="position" component="div" className="text-danger" />
            </div>

            {/* Club Field */}
            <div className="col-md-6">
              <label>Club</label>
              <Field name="club" className="form-control" />
              <ErrorMessage name="club" component="div" className="text-danger" />
            </div>

            {/* Nationality Field */}
            <div className="col-md-6">
              <label>Nationality</label>
              <Field name="nationality" className="form-control" />
              <ErrorMessage name="nationality" component="div" className="text-danger" />
            </div>

            {/* Goals Field */}
            <div className="col-md-3">
              <label>Goals</label>
              <Field name="goals" type="number" className="form-control" />
              <ErrorMessage name="goals" component="div" className="text-danger" />
            </div>

            {/* Matches Field */}
            <div className="col-md-3">
              <label>Matches Played</label>
              <Field name="matchesPlayed" type="number" className="form-control" />
              <ErrorMessage name="matchesPlayed" component="div" className="text-danger" />
            </div>

            {/* Jersey Number Field */}
            <div className="col-md-3">
              <label>Jersey Number</label>
              <Field name="jerseyNumber" type="number" className="form-control" />
              <ErrorMessage name="jerseyNumber" component="div" className="text-danger" />
            </div>

            {/* Email Field */}
            <div className="col-md-6">
              <label>Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            {/* Contact Field */}
            <div className="col-md-6">
              <label>Contact Number</label>
              <Field name="contactNumber" className="form-control" />
              <ErrorMessage name="contactNumber" component="div" className="text-danger" />
            </div>

            {/* Submit Buttons */}
            <div className="col-12">
              {/* Add Player button when not editing */}
              {!editPlayer && (
                <Button type="submit" variant="primary" className="me-2">
                  Add Player
                </Button>
              )}
              {/* Update Player button when editing */}
              {editPlayer && (
                <Button type="submit" variant="secondary">
                  Update Player
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>

      <h3 className="mt-4">📋 Player List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Club</th>
            <th>Goals</th>
            <th>Matches</th>
            <th>Jersey</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over players array and display each player in a row */}
          {players.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.position}</td>
              <td>{p.club}</td>
              <td>{p.goals}</td>
              <td>{p.matchesPlayed}</td>
              <td>{p.jerseyNumber}</td>
              <td>{p.email}</td>
              <td>{p.contactNumber}</td>
              <td>
                {/* Edit Button */}
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => setEditPlayer(p)} // set current player for editing
                  className="me-2"
                >
                  Edit
                </Button>
                {/* Delete Button */}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(p.id)} // delete player by id
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// Export component
export default FootballPlayerManagement;
