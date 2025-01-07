import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-header">Key Features</h2>
      <div className="feature">
        <span className="feature-icon">🔧</span>
        <h3 className="feature-title">AI-powered Design Generation</h3>
        <p className="feature-description">Generate designs with cutting-edge AI technology.</p>
      </div>
      <div className="feature">
        <span className="feature-icon">⚙️</span>
        <h3 className="feature-title">Seamless UI Customization</h3>
        <p className="feature-description">Fully customize your UI to meet your needs.</p>
      </div>
      <div className="feature">
        <span className="feature-icon">🚀</span>
        <h3 className="feature-title">Fast Implementation</h3>
        <p className="feature-description">Get your designs up and running quickly.</p>
      </div>

      <h2 className="section-header">Outreach Bots</h2>
      <div className="feature">
        <p className="feature-description">
          Automate your outreach with advanced AI bots to enhance your marketing efforts and grow your business.
        </p>
      </div>

      <h2 className="section-header">Voice Agent - Basic Settings</h2>
      <div className="feature">
        <p className="feature-description">
          Manage your basic settings for voice agents here and fine-tune the configuration to fit your needs.
        </p>
      </div>

      <h2 className="section-header">Voice Agent - Workflow</h2>
      <div className="feature">
        <p className="feature-description">
          Streamline your workflow with our intuitive design and make the most of your voice agents.
        </p>
      </div>
    </div>
  );
};

export default Features;
