import React from 'react';
import OutreachBots from '../components/OutreachBots';  // Assuming the component is in the components folder
import VoiceAgentBasic from '../components/VoiceAgentBasic';
import VoiceAgentWorkflow from '../components/VoiceAgentWorkflow';

const Features = () => {
  return (
    <div className="features">
      <h1>Key Features</h1>
      <p>Explore our AI-driven features below:</p>

      {/* Include OutreachBots, VoiceAgentBasic, and VoiceAgentWorkflow */}
      <OutreachBots />
      <VoiceAgentBasic />
      <VoiceAgentWorkflow />
    </div>
  );
};

export default Features;
