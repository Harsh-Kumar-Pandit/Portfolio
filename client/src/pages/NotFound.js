import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page not-found-page">
    <div className="not-found-content">
      <div className="not-found-code">404</div>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  </div>
);

export default NotFound;
