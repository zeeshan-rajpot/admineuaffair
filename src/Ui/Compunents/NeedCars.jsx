import React from 'react';

const NeedsCard = ({ heading,image, date, readTime, category, reportDescription, thumbnail }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      <img src={thumbnail || image} alt={heading} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div>

          <span>{date}</span>
          <span> , {readTime} min read</span>
            </div>
        <span className="text-green-500 font-semibold mb-2 inline-block">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-theme">{heading}</h3>
        <p className="text-gray-600 mb-4">{reportDescription}</p>
        <a href="#" className="text-green-500 font-semibold">Read More</a>
      </div>
    </div>
  );
};

export default NeedsCard;