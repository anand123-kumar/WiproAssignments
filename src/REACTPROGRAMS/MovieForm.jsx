// Import React and Component class for creating class-based components
import React, { Component } from "react";

// Define a class component named "MovieForm"
class MovieForm extends Component {
  // Constructor method to initialize state and bind methods
  constructor(props) {
    super(props); // Call parent class constructor with props
    console.log("constructor executed"); // Logs when constructor runs

    // Define initial state of the component
    this.state = {
      // Form fields (controlled components)
      title: "",          // Movie title input
      director: "",       // Director's name input
      year: "",           // Release year input
      genre: "Action",    // Dropdown (default value: "Action")
      rating: "",         // Radio button (1-5)
      description: "",    // Textarea for movie description
      platforms: {        // Object for checkbox values
        netflix: false,   // Netflix checkbox state
        prime: false,     // Amazon Prime checkbox state
        disney: false,    // Disney+ checkbox state
        others: false,    // Other platforms checkbox state
      },
      movies: [],         // Array to store submitted movies
      showForm: true,     // Boolean to toggle form visibility (for unmount demo)
    };
  }

  // ---------------- Lifecycle Methods ----------------

  // Runs before render when props/state are updated
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps executed");
    return null; // No update to state from props
  }

  // Runs after the component is mounted on the DOM
  componentDidMount() {
    console.log("componentDidMount executed");
  }

  // Decides whether to re-render component
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate executed");
    return true; // Always re-render
  }

  // Runs just before the update is applied to the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed");
    return null; // Not using snapshot
  }

  // Runs after update is finished
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executed");
  }

  // Runs before component is removed from DOM
  componentWillUnmount() {
    console.log("componentWillUnmount executed");
  }

  // ---------------- Handlers ----------------

  // Handle input changes for text, number, textarea, select, and radio
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // Dynamically update state
  };

  // Handle checkbox input changes for platforms
  handleCheckboxChange = (e) => {
    const { name, checked } = e.target; // Extract checkbox name and checked status
    this.setState((prevState) => ({
      platforms: {
        ...prevState.platforms, // Keep old values
        [name]: checked,        // Update only changed checkbox
      },
    }));
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevents default page reload

    // Extract form values from state
    const { title, director, year, genre, rating, description, platforms } = this.state;

    // Create a new movie object
    const newMovie = {
      title,          // Movie title
      director,       // Director
      year,           // Release year
      genre,          // Selected genre
      rating,         // Selected rating
      description,    // Description text
      platforms: Object.keys(platforms).filter((key) => platforms[key]), // Only checked platforms
    };

    // Update movies array and reset form fields
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie], // Add new movie to array
      // Reset form fields
      title: "",
      director: "",
      year: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: { netflix: false, prime: false, disney: false, others: false },
    }));
  };

  // Toggle form visibility (mount/unmount form)
  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  // ---------------- Render Method ----------------
  render() {
    console.log("render executed"); // Logs every time render runs
    return (
      <div className="container mt-4">
        {/* Button to toggle form visibility */}
        <button className="btn btn-warning mb-3" onClick={this.toggleForm}>
          {this.state.showForm ? "Hide Form" : "Show Form"}
        </button>

        {/* Show form only if showForm is true */}
        {this.state.showForm && (
          <div className="card p-4">
            <h3>Add Movie</h3>

            {/* Form for movie details */}
            <form onSubmit={this.handleSubmit}>
              
              {/* Movie Title Input */}
              <div className="mb-3">
                <label className="form-label">Movie Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Director Input */}
              <div className="mb-3">
                <label className="form-label">Director</label>
                <input
                  type="text"
                  name="director"
                  className="form-control"
                  value={this.state.director}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Release Year Input */}
              <div className="mb-3">
                <label className="form-label">Release Year</label>
                <input
                  type="number"
                  name="year"
                  className="form-control"
                  value={this.state.year}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Genre Dropdown */}
              <div className="mb-3">
                <label className="form-label">Genre</label>
                <select
                  name="genre"
                  className="form-control"
                  value={this.state.genre}
                  onChange={this.handleChange}
                >
                  <option>Action</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                  <option>Horror</option>
                </select>
              </div>

              {/* Rating Radio Buttons */}
              <div className="mb-3">
                <label className="form-label">Rating</label><br />
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num} className="me-2">
                    <input
                      type="radio"
                      name="rating"
                      value={num}
                      checked={this.state.rating === String(num)}
                      onChange={this.handleChange}
                    />{" "}
                    {num}
                  </label>
                ))}
              </div>

              {/* Description Textarea */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>

              {/* Streaming Platforms Checkboxes */}
              <div className="mb-3">
                <label className="form-label">Available on Streaming Platforms</label><br />
                {["netflix", "prime", "disney", "others"].map((platform) => (
                  <label key={platform} className="me-3">
                    <input
                      type="checkbox"
                      name={platform}
                      checked={this.state.platforms[platform]}
                      onChange={this.handleCheckboxChange}
                    />{" "}
                    {/* Show readable text for each checkbox */}
                    {platform === "netflix"
                      ? "Netflix"
                      : platform === "prime"
                      ? "Amazon Prime"
                      : platform === "disney"
                      ? "Disney+"
                      : "Others"}
                  </label>
                ))}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Add Movie
              </button>
            </form>
          </div>
        )}

        {/* Show movies table if at least one movie is added */}
        {this.state.movies.length > 0 && (
          <div className="mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Release Year</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Available on Streaming Platforms</th>
                </tr>
              </thead>
              <tbody>
                {/* Loop through movies array and render rows */}
                {this.state.movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.platforms.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// Export MovieForm so it can be imported in other files
export default MovieForm;
