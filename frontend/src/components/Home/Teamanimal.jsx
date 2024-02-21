import React from 'react';

function OurTeamSection() {
  return (
    <div className="our-team-section">
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="image1.jpg" alt="Team Member 1" />
          <h3>Team Member 1</h3>
          <p>Role of Team Member 1</p>
        </div>
        <div className="team-member">
          <img src="image2.jpg" alt="Team Member 2" />
          <h3>Team Member 2</h3>
          <p>Role of Team Member 2</p>
        </div>
        <div className="team-member">
          <img src="image3.jpg" alt="Team Member 3" />
          <h3>Team Member 3</h3>
          <p>Role of Team Member 3</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeamSection;
