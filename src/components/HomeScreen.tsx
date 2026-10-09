import React from 'react';
import './HomeScreen.css';

export const HomeScreen: React.FC = () => {
  return (
    <div className="homescreen-container">
      <div className="homescreen-content">
        <span className="homescreen-header-badge">Sherlock Holmes Archive</span>
        <h1 className="homescreen-title">Curio Cabinet</h1>

        <div className="homescreen-divider">
          <span className="homescreen-divider-line" />
          <span className="homescreen-divider-diamond">◆</span>
          <span className="homescreen-divider-line" />
        </div>

        <h2 className="homescreen-subtitle">Welcome to 221B Baker Street</h2>

        <p className="homescreen-description">
          The game is afoot. Ready for storefront, merchandise catalog, and interactive cabinet features.
        </p>

        <div className="homescreen-placeholder-box">
          Ready to build your merchandise storefront here!
        </div>
      </div>
    </div>
  );
};
