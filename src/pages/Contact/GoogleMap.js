import React from "react";

const GoogleMap = ({ location, width, height }) => {
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.4835520005945!2d-79.92247478517749!3d43.26224447913664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84b28e16079d%3A0x1f203c087d69dafd!2s1280%20Main%20St%20W%2C%20Hamilton%2C%20ON%20L8S%204L8!5e0!3m2!1sen!2sca!4v1678988792707!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`;
  return (
    <iframe
      title="Google Map"
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen={true}
    />
  );
};

export default GoogleMap;
