import React from 'react';
import AutismLogo from '../assets/autism logo.jpg'; // Ensure the path to the image is correct
import './Home.css'; // Optional CSS for styling

function Home() {
    return (
        <div className="home">
            {/* Display the logo */}
            <div className="logo-container">
                <img
                    src={AutismLogo}
                    alt="Autism Logo"
                    className="autism-logo" // Add a class for styling (optional)
                />
            </div>

            {/* Existing content */}
            <h1>Welcome to Autism Detection Application</h1>
            <p>Navigate through the app to upload data, view test results, and more.</p>
            <ul>
                <li><a href="/upload">Upload Data</a></li>
                <li><a href="/results">Test Results</a></li>
            </ul>
        </div>
    );
}

export default Home;


