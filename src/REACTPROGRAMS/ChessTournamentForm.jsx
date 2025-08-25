import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Main functional component definition
const ChessTournamentForm = () => {
  // State to keep track of registered players (array of player objects)
  const [players, setPlayers] = useState([]);

  // Validation schema defined using Yup
  const validationSchema = Yup.object().shape({
    playerName: Yup.string()
      .min(3, "Name must be at least 3 characters") // Minimum length validation
      .required("Player Name is required"), // Required field

    dateOfBirth: Yup.date()
      .required("Date of Birth is required") // Must be filled
      .test("age", "Age must be between 5 and 90 years", (value) => {
        if (!value) return false; // Fail if no date
        const today = new Date(); // Get today’s date
        const dob = new Date(value); // Convert input to Date
        const age = today.getFullYear() - dob.getFullYear(); // Calculate rough age
        return age >= 5 && age <= 90; // Must be in range
      }),

    gender: Yup.string().required("Gender is required"), // Must select gender

    fideId: Yup.string()
      .matches(/^[0-9]{8}$/, "FIDE ID must be exactly 8 digits") // Regex for 8 digits
      .required("FIDE ID is required"), // Required field

    rating: Yup.number()
      .min(100, "Rating must be at least 100") // Lower bound
      .max(3000, "Rating cannot exceed 3000") // Upper bound
      .required("Rating is required"), // Required

    email: Yup.string()
      .email("Invalid email format") // Must follow email format
      .required("Email is required"), // Required

    mobile: Yup.string()
      .matches(
        /^[6-9][0-9]{9}$/, // Regex: must start with 6-9 and be 10 digits
        "Mobile must be 10 digits starting with 6-9"
      )
      .required("Mobile number is required"), // Required

    country: Yup.string().required("Country is required"), // Required

    category: Yup.string().required("Category is required"), // Required

    parentContact: Yup.string().when("category", {
      is: "Under 12", // Rule applies only if category is "Under 12"
      then: (schema) =>
        schema
          .matches(/^[0-9]{10}$/, "Parent contact must be 10 digits") // Must be valid number
          .required("Parent contact is required for Under 12 category"), // Required if U-12
      otherwise: (schema) => schema.notRequired(), // Optional otherwise
    }),

    payment: Yup.boolean().oneOf([true], "Payment confirmation is required"), // Checkbox must be true

    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms & Conditions" // Checkbox must be true
    ),
  });

  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values); // Log values in console
    setPlayers([...players, values]); // Append new player to existing list
    resetForm(); // Reset fields after submit
  };

  // JSX UI return
  return (
    <div className="container mt-5">
      {/* Page heading */}
      <h2 className="text-center mb-4">Chess Tournament Registration Form</h2>

      {/* Formik wrapper initializes form, validation, and submission */}
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
        validationSchema={validationSchema} // Attach Yup schema
        onSubmit={handleSubmit} // Submission function
      >
        {/* Render prop to access form values */}
        {({ values }) => (
          // Form wrapper
          <Form>
            {/* Player Name field */}
            <div className="mb-3">
              <label className="form-label">Player Name</label>
              <Field name="playerName" className="form-control" />
              <ErrorMessage
                name="playerName"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Date of Birth field */}
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <Field type="date" name="dateOfBirth" className="form-control" />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Gender dropdown */}
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

            {/* FIDE ID field */}
            <div className="mb-3">
              <label className="form-label">FIDE ID</label>
              <Field name="fideId" className="form-control" />
              <ErrorMessage
                name="fideId"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Rating field */}
            <div className="mb-3">
              <label className="form-label">Rating</label>
              <Field type="number" name="rating" className="form-control" />
              <ErrorMessage
                name="rating"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Email field */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Mobile number field */}
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <Field name="mobile" className="form-control" />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Country field */}
            <div className="mb-3">
              <label className="form-label">Country</label>
              <Field name="country" className="form-control" />
              <ErrorMessage
                name="country"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Category dropdown */}
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

            {/* Parent contact appears only if category = Under 12 */}
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

            {/* Payment checkbox */}
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

            {/* Terms checkbox */}
            <div className="form-check mb-3">
              <Field type="checkbox" name="terms" className="form-check-input" />
              <label className="form-check-label">
                Accept Terms & Conditions
              </label>
              <ErrorMessage
                name="terms"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary">
              Register Player
            </button>
          </Form>
        )}
      </Formik>

      {/* Show registered players in a table */}
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

// Export the component so it can be used in other files
export default ChessTournamentForm;
