// Import React and Component class
import React, { Component } from "react";

// Define a class component MovieForm
class MovieForm extends Component {
  constructor(props) {
    super(props);
    console.log("constructor executed"); // Logs when constructor runs

    // Initial state of the component
    this.state = {
      // Form fields
      title: "",          // Movie title
      director: "",       // Director's name
      year: "",           // Release year
      genre: "Action",    // Default genre
      rating: "",         // Rating (1-5)
      description: "",    // Movie description
      platforms: {        // Streaming platforms (checkboxes)
        netflix: false,
        prime: false,
        disney: false,
        others: false,
      },
      // Movie list array to store submitted movies
      movies: [],
      // Toggle state to show/hide form (for unmount demo)
      showForm: true,
    };
  }

  // ---------------- Lifecycle Methods ----------------
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps executed");
    return null; // No state updates from props
  }

  componentDidMount() {
    console.log("componentDidMount executed"); // Runs after component mounts
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate executed");
    return true; // Always allow re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed");
    return null; // No snapshot needed
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executed");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount executed");
  }

  // ---------------- Handlers ----------------
  // Handle input field changes (text, number, textarea, select, radio)
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle checkbox changes (streaming platforms)
  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      platforms: {
        ...prevState.platforms,
        [name]: checked, // Update only clicked checkbox
      },
    }));
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Extract form data from state
    const { title, director, year, genre, rating, description, platforms } = this.state;

    // Create a new movie object
    const newMovie = {
      title,
      director,
      year,
      genre,
      rating,
      description,
      platforms: Object.keys(platforms).filter((key) => platforms[key]), // Store checked platforms
    };

    // Update movies list & reset form fields
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie], // Add new movie to list
      // Reset form inputs
      title: "",
      director: "",
      year: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: { netflix: false, prime: false, disney: false, others: false },
    }));
  };

  // Toggle form visibility (for unmount demo)
  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  // ---------------- Render Method ----------------
  render() {
    console.log("render executed"); // Logs every render
    return (
      <div className="container mt-4">
        {/* Toggle button to show/hide form */}
        <button className="btn btn-warning mb-3" onClick={this.toggleForm}>
          {this.state.showForm ? "Hide Form" : "Show Form"}
        </button>

        {/* Conditional rendering: show form only if showForm = true */}
        {this.state.showForm && (
          <div className="card p-4">
            <h3>Add Movie</h3>
            <form onSubmit={this.handleSubmit}>
              {/* Movie Title */}
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

              {/* Director */}
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

              {/* Release Year */}
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
                    {/* Display label text dynamically */}
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

        {/* Movies Table (only visible if at least one movie exists) */}
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
                {/* Map through movies and display each as a row */}
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

// Export component so it can be used elsewhere
export default MovieForm;
