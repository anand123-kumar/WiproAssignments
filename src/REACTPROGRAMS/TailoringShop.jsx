// Import React and useState hook
import React, { useState } from 'react';

// Reusable component for each service card
const ServiceCard = ({ service }) => {
  // State to toggle showing fabrics list
  const [showFabrics, setShowFabrics] = useState(false);

  // Function to toggle fabric visibility
  const toggleFabrics = () => {
    setShowFabrics(!showFabrics);
  };

  return (
    // Bootstrap grid column for responsive layout
    <div className="col-md-6 col-xl-3 mb-3">
      {/* Card container with border */}
      <div className="card h-100" style={{border: '1px solid #dee2e6'}}>
        {/* Card body with padding */}
        <div className="card-body p-2">
          {/* Service name displayed */}
          <h6 className="card-title mb-1" style={{fontSize: '1rem', fontWeight: '600'}}>
            {service.serviceName}
          </h6>

          {/* Service price displayed */}
          <p className="card-text mb-2" style={{fontSize: '0.85rem', color: '#333'}}>
            <strong>Price: </strong>${service.price}
          </p>

          {/* Button to toggle fabrics list */}
          <button 
            className="btn btn-primary btn-sm px-2 py-1"
            onClick={toggleFabrics} // Toggle on click
            style={{fontSize: '0.75rem'}}
          >
            Show Fabrics
          </button>
          
          {/* Conditionally render fabrics list if showFabrics is true */}
          {showFabrics && (
            <div className="mt-2">
              <h6 style={{fontSize: '0.8rem', fontWeight: '600', marginBottom: '6px'}}>
                Available Fabrics:
              </h6>

              {/* Bootstrap row for fabric grid */}
              <div className="row g-1">
                {service.fabricsAvailable.map((fabric, index) => (
                  <div key={index} className="col-6">
                    {/* Fabric item box */}
                    <div
                      className="text-center py-1 px-1"
                      style={{
                        backgroundColor: '#e3f2fd', // Light blue background
                        border: '1px solid #bbdefb', // Border around box
                        borderRadius: '3px',        // Rounded edges
                        fontSize: '0.7rem',         // Small font
                        color: '#1976d2'            // Blue text
                      }}
                    >
                      {fabric} {/* Display fabric name */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main TailorShop component
const TailorShop = () => {
  // Array of tailoring services with names, prices, and fabrics
  const tailoringServices = [
    {
      serviceName: "Shirt",
      price: 800,
      fabricsAvailable: ["Cotton", "Silk", "Linen", "Polyester", "Denim", "Chambray"]
    },
    {
      serviceName: "Pants", 
      price: 1200,
      fabricsAvailable: ["Cotton", "Wool", "Denim", "Khaki", "Polyester", "Linen"]
    },
    {
      serviceName: "Lehenga",
      price: 5000,
      fabricsAvailable: ["Silk", "Georgette", "Chiffon", "Velvet", "Brocade", "Net"]
    },
    {
      serviceName: "Blouse",
      price: 1500,
      fabricsAvailable: ["Silk", "Cotton", "Chiffon", "Georgette", "Crepe", "Satin"]
    }
  ];

  return (
    <>
      {/* Bootstrap CSS link for styling */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      {/* Page container with background and padding */}
      <div style={{backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '15px 0'}}>
        <div className="container">
          {/* Page heading */}
          <div className="row mb-3">
            <div className="col-12 text-center">
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: '#333', marginBottom: '20px'}}>
                Tailoring Services
              </h3>
            </div>
          </div>
          
          {/* Grid of service cards */}
          <div className="row">
            {tailoringServices.map((service, index) => (
              // Render a ServiceCard for each tailoring service
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Export TailorShop so it can be used in other files
export default TailorShop;
