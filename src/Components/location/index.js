import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5006.337403288904!2d13.440317306377686!3d52.44457471530269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84583dff5b55b%3A0x213c77d998f26f9d!2sSchloss+Britz!5e0!3m2!1sen!2sde!4v1559231751058!5m2!1sen!2sde"
        title="Location"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
