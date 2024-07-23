import React from 'react';

import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import EllipsizedParagraph from './EllipsizedParagraph';
const NeedsCard = ({ heading,image, createdAt, readTime, category, reportDescription, thumbnail }) => {
  const formatDate = (isoString) => {
    return format(new Date(isoString), 'MMMM-dd');
  };

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      {/* <img src={thumbnail || image} alt={heading} className="w-full h-48 object-cover" /> */}
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div>

          <span>{formatDate(createdAt)}</span>
          <span> , {readTime} min read</span>
            </div>
        <span className="text-green-500 font-semibold mb-2 inline-block">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-theme">{heading}</h3>
        <EllipsizedParagraph text={reportDescription}/>
        {/* <p className="text-gray-600 mb-4">{reportDescription}</p> */}
        <Link  
        to={`/ArticleDetail/${encodeURIComponent(heading)}/${encodeURIComponent(createdAt)}/${encodeURIComponent(readTime)}/${encodeURIComponent(category)}/${encodeURIComponent(reportDescription)}/${encodeURIComponent(thumbnail)}`}
         className="text-green-500 font-semibold">Read More</Link>
      </div>
    </div>
  );
};

export default NeedsCard;