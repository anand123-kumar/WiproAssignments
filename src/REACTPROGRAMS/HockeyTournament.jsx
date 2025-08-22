// Import React library for building UI components
import React, { useState } from "react";

// Import Formik for form handling, Form and Field for form elements, ErrorMessage for validation messages
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

// Import Yup for schema validation
import * as Yup from "yup";

// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Define the HockeyTournament functional component
const HockeyTournament = () => {
  // State hook to store submitted player registration records
  const [records, setRecords] = useState([]);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    // Player name validation: required, alphabets and spaces only, length between 3 and 40
    playerName: Yup.string()
      .required("Player Name is required")
      .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces allowed")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),

    // Jersey number validation: required, integer between 1 and 99
    jerseyNumber: Yup.number()
      .required("Jersey Number is required")
      .integer("Must be an integer")
      .min(1, "Min 1")
      .max(99, "Max 99"),

    // Position is required (Forward, Defense, Goalie)
    position: Yup.string().required("Position is required"),

    // Stick hand is required (Left, Right)
    stickHand: Yup.string().required("Stick hand is required"),

    // Date of birth validation: required, age between 10 and 55
    dateOfBirth: Yup.date()
      .required("Date of Birth is required")
      .test("age", "Age must be between 10 and 55", (value) => {
        if (!value) return false;
        const age = new Date().getFullYear() - new Date(value).getFullYear();
        return age >= 10 && age <= 55;
      }),

    // Nationality is required
    nationality: Yup.string().required("Nationality is required"),

    // Email validation: required, valid format
    email: Yup.string().required("Email is required").email("Invalid email"),

    // Phone validation: Indian mobile (10 digits, starts with 6–9)
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),

    // Player ID validation: format HOCK-XXXX
    playerId: Yup.string()
      .required("Player ID is required")
      .matches(/^HOCK-\d{4}$/, "Format must be HOCK-XXXX"),

    // Guardian name required if player is below 18
    guardianName: Yup.string().when("dateOfBirth", (dob, schema) => {
      if (dob) {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 18) return schema.required("Guardian Name is required");
      }
      return schema;
    }),

    // Team name is required
    teamName: Yup.string().required("Team Name is required"),

    // League level is required (Amateur, College, Pro)
    leagueLevel: Yup.string().required("League Level is required"),

    // Tournament name is required
    tournamentName: Yup.string().required("Tournament Name is required"),

    // Start date is required
    startDate: Yup.date().required("Start Date is required"),

    // End date is required and must be after or equal to start date
    endDate: Yup.date()
      .required("End Date is required")
      .min(Yup.ref("startDate"), "End date cannot be before start date"),

    // Jersey size is required if position is not Goalie
    jerseySize: Yup.string().when("position", {
      is: (pos) => pos !== "Goalie",
      then: (schema) => schema.required("Jersey Size is required"),
    }),

    // Pad size is required if position is Goalie
    padSize: Yup.string().when("position", {
      is: "Goalie",
      then: (schema) => schema.required("Pad Size is required"),
    }),

    // Medical condition checkbox (boolean)
    hasMedicalCondition: Yup.boolean(),

    // Medical certificate number required if hasMedicalCondition is true
    medicalCertNumber: Yup.string().when("hasMedicalCondition", {
      is: true,
      then: (schema) =>
        schema
          .required("Medical Certificate Number is required")
          .matches(/^MED-\d{4}$/, "Format must be MED-XXXX"),
    }),

    // Consent checkbox must be checked
    consent: Yup.boolean().oneOf([true], "Consent is required"),

    // Past teams: dynamic array of up to 3 teams
    pastTeams: Yup.array().of(
      Yup.object({
        // Club name: required, 2–30 chars
        clubName: Yup.string()
          .required("Club Name is required")
          .min(2, "Min 2 characters")
          .max(30, "Max 30 characters"),

        // Years: required, integer 1–20
        years: Yup.number()
          .required("Years is required")
          .integer("Must be an integer")
          .min(1, "Min 1 year")
          .max(20, "Max 20 years"),
      })
    ),
  });

  // Initial values for form fields
  const initialValues = {
    playerName: "",
    jerseyNumber: "",
    position: "",
    stickHand: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phone: "",
    playerId: "",
    guardianName: "",
    teamName: "",
    leagueLevel: "",
    tournamentName: "",
    startDate: "",
    endDate: "",
    jerseySize: "",
    padSize: "",
    hasMedicalCondition: false,
    medicalCertNumber: "",
    consent: false,
    pastTeams: [], // dynamic list of past teams
  };

  // On form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values); // Log form data in console
    setRecords([...records, values]); // Add new record to table
    resetForm(); // Reset the form
  };

  return (
    <div className="container mt-4">
      {/* Form Title */}
      <h2 className="mb-4">Hockey Tournament Registration</h2>

      {/* Formik wrapper with initialValues, validationSchema, and onSubmit */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* Formik render function to access form props */}
        {({ values, isValid }) => (
          <Form>
            {/* Player Details Section */}
            <h4>Player Details</h4>

            {/* Player Name Field */}
            <div className="mb-3">
              <label>Player Name</label>
              <Field name="playerName" className="form-control" />
              <ErrorMessage name="playerName" component="div" className="text-danger" />
            </div>

            {/* Jersey Number Field */}
            <div className="mb-3">
              <label>Jersey Number</label>
              <Field name="jerseyNumber" type="number" className="form-control" />
              <ErrorMessage name="jerseyNumber" component="div" className="text-danger" />
            </div>

            {/* Position Field */}
            <div className="mb-3">
              <label>Position</label>
              <Field as="select" name="position" className="form-control">
                <option value="">Select</option>
                <option value="Forward">Forward</option>
                <option value="Defense">Defense</option>
                <option value="Goalie">Goalie</option>
              </Field>
              <ErrorMessage name="position" component="div" className="text-danger" />
            </div>

            {/* Stick Hand Field */}
            <div className="mb-3">
              <label>Stick Hand</label>
              <Field as="select" name="stickHand" className="form-control">
                <option value="">Select</option>
                <option value="Left">Left</option>
                <option value="Right">Right</option>
              </Field>
              <ErrorMessage name="stickHand" component="div" className="text-danger" />
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <label>Date of Birth</label>
              <Field type="date" name="dateOfBirth" className="form-control" />
              <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
            </div>

            {/* Guardian Name (conditional) */}
            <div className="mb-3">
              <label>Guardian Name</label>
              <Field name="guardianName" className="form-control" />
              <ErrorMessage name="guardianName" component="div" className="text-danger" />
            </div>

            {/* Nationality */}
            <div className="mb-3">
              <label>Nationality</label>
              <Field name="nationality" className="form-control" />
              <ErrorMessage name="nationality" component="div" className="text-danger" />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label>Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label>Phone</label>
              <Field name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>

            {/* Player ID */}
            <div className="mb-3">
              <label>Player ID</label>
              <Field name="playerId" className="form-control" />
              <ErrorMessage name="playerId" component="div" className="text-danger" />
            </div>

            {/* Team & Event Info */}
            <h4>Team & Event Information</h4>

            {/* Team Name */}
            <div className="mb-3">
              <label>Team Name</label>
              <Field name="teamName" className="form-control" />
              <ErrorMessage name="teamName" component="div" className="text-danger" />
            </div>

            {/* League Level */}
            <div className="mb-3">
              <label>League Level</label>
              <Field as="select" name="leagueLevel" className="form-control">
                <option value="">Select</option>
                <option value="Amateur">Amateur</option>
                <option value="College">College</option>
                <option value="Pro">Pro</option>
              </Field>
              <ErrorMessage name="leagueLevel" component="div" className="text-danger" />
            </div>

            {/* Tournament Name */}
            <div className="mb-3">
              <label>Tournament Name</label>
              <Field name="tournamentName" className="form-control" />
              <ErrorMessage name="tournamentName" component="div" className="text-danger" />
            </div>

            {/* Start Date */}
            <div className="mb-3">
              <label>Start Date</label>
              <Field type="date" name="startDate" className="form-control" />
              <ErrorMessage name="startDate" component="div" className="text-danger" />
            </div>

            {/* End Date */}
            <div className="mb-3">
              <label>End Date</label>
              <Field type="date" name="endDate" className="form-control" />
              <ErrorMessage name="endDate" component="div" className="text-danger" />
            </div>

            {/* Jersey Size (conditional) */}
            {values.position !== "Goalie" && (
              <div className="mb-3">
                <label>Jersey Size</label>
                <Field name="jerseySize" className="form-control" />
                <ErrorMessage name="jerseySize" component="div" className="text-danger" />
              </div>
            )}

            {/* Pad Size (conditional) */}
            {values.position === "Goalie" && (
              <div className="mb-3">
                <label>Pad Size</label>
                <Field name="padSize" className="form-control" />
                <ErrorMessage name="padSize" component="div" className="text-danger" />
              </div>
            )}

            {/* Medical & Consent */}
            <h4>Medical & Consent</h4>

            {/* Medical Condition Checkbox */}
            <div className="mb-3 form-check">
              <Field type="checkbox" name="hasMedicalCondition" className="form-check-input" />
              <label className="form-check-label">Has Medical Condition</label>
            </div>

            {/* Medical Certificate Number (conditional) */}
            {values.hasMedicalCondition && (
              <div className="mb-3">
                <label>Medical Certificate Number</label>
                <Field name="medicalCertNumber" className="form-control" />
                <ErrorMessage
                  name="medicalCertNumber"
                  component="div"
                  className="text-danger"
                />
              </div>
            )}

            {/* Consent Checkbox */}
            <div className="mb-3 form-check">
              <Field type="checkbox" name="consent" className="form-check-input" />
              <label className="form-check-label">I agree to participate</label>
              <ErrorMessage name="consent" component="div" className="text-danger" />
            </div>

            {/* Past Teams (FieldArray) */}
            <h4>Past Teams</h4>
            <FieldArray name="pastTeams">
              {({ push, remove }) => (
                <div>
                  {values.pastTeams.map((_, index) => (
                    <div key={index} className="border p-3 mb-2">
                      {/* Club Name */}
                      <div className="mb-3">
                        <label>Club Name</label>
                        <Field
                          name={`pastTeams[${index}].clubName`}
                          className="form-control"
                        />
                        <ErrorMessage
                          name={`pastTeams[${index}].clubName`}
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      {/* Years */}
                      <div className="mb-3">
                        <label>Years</label>
                        <Field
                          name={`pastTeams[${index}].years`}
                          type="number"
                          className="form-control"
                        />
                        <ErrorMessage
                          name={`pastTeams[${index}].years`}
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  {/* Add Team Button (limit 3) */}
                  {values.pastTeams.length < 3 && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => push({ clubName: "", years: "" })}
                    >
                      Add Team
                    </button>
                  )}
                </div>
              )}
            </FieldArray>

            {/* Submit Button (disabled until form is valid) */}
            <button type="submit" className="btn btn-primary mt-3" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* Display submitted records in a table */}
      <h3 className="mt-5">Registered Players</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Jersey Number</th>
            <th>Position</th>
            <th>Team Name</th>
            <th>Tournament</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, index) => (
            <tr key={index}>
              <td>{rec.playerName}</td>
              <td>{rec.jerseyNumber}</td>
              <td>{rec.position}</td>
              <td>{rec.teamName}</td>
              <td>{rec.tournamentName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the HockeyTournament component
export default HockeyTournament;
