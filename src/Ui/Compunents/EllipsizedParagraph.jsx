import React from 'react';


const EllipsizedParagraph = ({ text }) => {
  return (
    <p className="clamp-this text-gray-600 mb-4">
      {text}
    </p>
  );
};

export default EllipsizedParagraph;
