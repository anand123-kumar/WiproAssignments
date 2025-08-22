// Import React library for building the component
import React, { useState } from "react";

// Import Formik form helpers, Field for input binding, Form wrapper, and ErrorMessage for validation errors
import { Formik, Field, Form, ErrorMessage } from "formik";

// Import Yup for schema-based form validation
import * as Yup from "yup";

// Main component definition
const ChessTournamentForm = () => {
  // State to store submitted players (array of player objects)
  const [players, setPlayers] = useState([]);

  // Validation schema defined using Yup for all fields
  const validationSchema = Yup.object().shape({
    playerName: Yup.string()
      .min(3, "Name must be at least 3 characters") // Minimum 3 characters required
      .required("Player Name is required"), // Cannot be empty

    dateOfBirth: Yup.date()
      .required("Date of Birth is required") // Must be provided
      .test("age", "Age must be between 5 and 90 years", (value) => {
        if (!value) return false; // If no date, fail validation
        const today = new Date();
        const dob = new Date(value); // Convert value to Date object
        const age = today.getFullYear() - dob.getFullYear(); // Calculate age
        return age >= 5 && age <= 90; // Must be between 5 and 90
      }),

    gender: Yup.string().required("Gender is required"), // Gender must be selected

    fideId: Yup.string()
      .matches(/^[0-9]{8}$/, "FIDE ID must be exactly 8 digits") // Must be exactly 8 digits
      .required("FIDE ID is required"),

    rating: Yup.number()
      .min(100, "Rating must be at least 100") // Minimum rating 100
      .max(3000, "Rating cannot exceed 3000") // Maximum rating 3000
      .required("Rating is required"),

    email: Yup.string()
      .email("Invalid email format") // Must be valid email
      .required("Email is required"),

    mobile: Yup.string()
      .matches(/^[6-9][0-9]{9}$/, "Mobile must be 10 digits starting with 6-9") // Starts with 6-9 and 10 digits
      .required("Mobile number is required"),

    country: Yup.string().required("Country is required"), // Must be provided

    category: Yup.string().required("Category is required"), // Must choose category

    parentContact: Yup.string().when("category", {
      is: "Under 12", // Only required if category is "Under 12"
      then: (schema) =>
        schema
          .matches(/^[0-9]{10}$/, "Parent contact must be 10 digits") // 10-digit number
          .required("Parent contact is required for Under 12 category"),
      otherwise: (schema) => schema.notRequired(), // Not required otherwise
    }),

    payment: Yup.boolean().oneOf(
      [true],
      "Payment confirmation is required"
    ), // Must check payment

    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms & Conditions"
    ), // Must accept terms
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values); // Log submitted form values
    setPlayers([...players, values]); // Append new player to players list
    resetForm(); // Reset the form after submission
  };

  return (
    <div className="container mt-5">
      {/* Heading */}
      <h2 className="text-center mb-4">Chess Tournament Registration Form</h2>

      {/* Formik wrapper for handling form state and validation */}
      <Formik
        initialValues={{
          playerName: "",
          dateOfBirth: "",
          gender: "",
          fideId: "",
          rating: "",
          email: "",
          mobile: "",
          country: "",
          category: "",
          parentContact: "",
          payment: false,
          terms: false,
        }}
        validationSchema={validationSchema} // Apply Yup validation schema
        onSubmit={handleSubmit} // Handle form submit
      >
        {/* Render function for Formik */}
        {({ values }) => (
          <Form>
            {/* Player Name */}
            <div className="mb-3">
              <label className="form-label">Player Name</label>
              <Field name="playerName" className="form-control" />
              <ErrorMessage
                name="playerName"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <Field type="date" name="dateOfBirth" className="form-control" />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Gender Selection */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <Field as="select" name="gender" className="form-select">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-danger"
              />
            </div>

            {/* FIDE ID */}
            <div className="mb-3">
              <label className="form-label">FIDE ID</label>
              <Field name="fideId" className="form-control" />
              <ErrorMessage
                name="fideId"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Rating */}
            <div className="mb-3">
              <label className="form-label">Rating</label>
              <Field type="number" name="rating" className="form-control" />
              <ErrorMessage
                name="rating"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <Field name="mobile" className="form-control" />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Country */}
            <div className="mb-3">
              <label className="form-label">Country</label>
              <Field name="country" className="form-control" />
              <ErrorMessage
                name="country"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Category */}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <Field as="select" name="category" className="form-select">
                <option value="">Select</option>
                <option value="Under 12">Under 12</option>
                <option value="Under 18">Under 18</option>
                <option value="Open">Open</option>
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Parent Contact - Only for Under 12 */}
            {values.category === "Under 12" && (
              <div className="mb-3">
                <label className="form-label">Parent Contact</label>
                <Field name="parentContact" className="form-control" />
                <ErrorMessage
                  name="parentContact"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            {/* Payment Confirmation */}
            <div className="form-check mb-2">
              <Field
                type="checkbox"
                name="payment"
                className="form-check-input"
              />
              <label className="form-check-label">Payment Confirmation</label>
              <ErrorMessage
                name="payment"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="form-check mb-3">
              <Field type="checkbox" name="terms" className="form-check-input" />
              <label className="form-check-label">Accept Terms & Conditions</label>
              <ErrorMessage
                name="terms"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Register Player
            </button>
          </Form>
        )}
      </Formik>

      {/* Display table of submitted players */}
      {players.length > 0 && (
        <div className="mt-5">
          <h3>Registered Players</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>FIDE ID</th>
                <th>Rating</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Country</th>
                <th>Category</th>
                <th>Parent Contact</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={index}>
                  <td>{player.playerName}</td>
                  <td>{player.dateOfBirth}</td>
                  <td>{player.gender}</td>
                  <td>{player.fideId}</td>
                  <td>{player.rating}</td>
                  <td>{player.email}</td>
                  <td>{player.mobile}</td>
                  <td>{player.country}</td>
                  <td>{player.category}</td>
                  <td>{player.parentContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Export the component for use in App.js
export default ChessTournamentForm;
