// export default HomePage
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS

function HomePage() {
  return (
    <div className="homepage">
      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">Q</div>
          <div className="logo-text">Job Board</div>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Browse Job</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact </Link>
        </nav>
        <div className="nav-actions">
          <Link to="/logging" className="login-link">Log in</Link>
          <Link to="/post-job" className="post-job-btn">Post A Job</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <p className="hero-subtitle">4536+ Jobs listed</p>
        <h1 className="hero-title">Find your Dream Job</h1>
        <p className="hero-description">
          We appreciate your interest in our company and wish you success in your job search. Please feel free to apply again in the future.
        </p>
        <Link to="/upload-resume" className="upload-btn">
          Upload Your Resume
        </Link>
        <div className="hero-illustration">
           <p>More Jobs</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="search-bar">
        <input type="text" placeholder="Search keyword" />
        <input type="text" placeholder="Location" />
        <select>
          <option>Category</option>
          <option>Engineering</option>
          <option>Design</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>Finance & Accounting</option>
          <option>Project Management</option>
          <option>Education & Training</option>
        </select>
        <button className="find-job-btn">Find Job</button>
      </section>

      <section class="steps-section">
        <h2>Get started in <span>3 easy steps</span></h2>
        <div class="steps-container">
            <div class="step-card">
                <div class="step-number">1</div>
                {/* <img src="Find-a-Job.png" alt="Find a Job"> */}
                <h3>Find a Job</h3>
                <p>Tell us what you want in just 5-minutes.</p>
            </div>
            <div class="step-card">
                <div class="step-number">2</div>
              {/* <img src="verification-logo.avif" alt="Get Verified"> */}
                <h3>Get Verified</h3>
                <p>Our team will call to verify your employer account.</p>
            </div>
            <div class="step-card">
                <div class="step-number">3</div>
                {/* <img src="call-logo.jpeg" alt="Get Calls. Hire."> */}
                <h3>Get calls. Hire.</h3>
                <p>You will get calls from relevant candidates within one hour or call them directly from our candidate database.</p>
            </div>
        </div>
        <a href="post-job.html" class="post-job-button">Find your Job</a>
    </section>

     <section class="categories-section">
  <h2 class="categories-h2">Hire from 50+ Job Categories</h2>
  <div class="highlight"></div>
  <div class="categories" id="categoriesContainer">
    <button class="category-btn">Software Development</button>
    <button class="category-btn">Marketing & Sales</button>
    <button class="category-btn">Design & Creative</button>
    <button class="category-btn">Data Science & Analytics</button>
    <button class="category-btn">Customer Support</button>
    <button class="category-btn">Finance & Accounting</button>
    <button class="category-btn">Human Resources</button>
    <button class="category-btn">Healthcare</button>
    <button class="category-btn">Education & Training</button>
    <button class="category-btn">Project Management</button>
  </div>
    <button class="toggle-btn" id="toggleButton">Show all ▼</button>
</section>

<section class="categories-section">
  <h2 class="categories-h2">Hire from 50+ Cities in India</h2>
  <div class="highlight"></div>
  <div class="categories" id="categoriesContainer">
    <button class="category-btn">Mumbai</button>
    <button class="category-btn">Delhi</button>
    <button class="category-btn">Bangalore</button>
    <button class="category-btn">Hyderabad</button>
    <button class="category-btn">Chennai</button>
    <button class="category-btn">Kolkata</button>
    <button class="category-btn">Pune</button>
    <button class="category-btn">Ahmedabad</button>
    <button class="category-btn">Jaipur</button>
    <button class="category-btn">Chandigarh</button>
  </div>
  <button class="toggle-btn" id="toggleButton">Show all ▼</button>
</section>


<footer>
        <div class="footer-container">
            <div class="footer-column">
                <h3>JobBoard</h3>
                <p>Your gateway to the best opportunities.</p>
            </div>
            <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Browse Jobs</a></li>
                    <li><a href="#">Post a Job</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Career Advice</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; <span id="year"></span> Design JobBoard by Vibhu Tyagi. All rights reserved.
        </div>
    </footer>
    </div>
  );
}

export default HomePage;


