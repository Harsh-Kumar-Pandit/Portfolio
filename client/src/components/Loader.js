import React from 'react';

const Loader = ({ fullPage = false }) => (
  <div className={`loader-wrapper ${fullPage ? 'full-page' : ''}`}>
    <div className="loader-ring">
      <div /><div /><div /><div />
    </div>
  </div>
);

export default Loader;
