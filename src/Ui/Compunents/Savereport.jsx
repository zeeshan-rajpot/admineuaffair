const SavedReportsCard = ({ heading, date, readTime, category, reportDescription }) => {
    return (
      <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="ml-4 text-secColor">{category}</span>
          <span className="ml-auto">{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-theme" >{heading}</h3>
        <p className="text-gray-600 mb-4">{reportDescription}</p>
        <a href="#" className="text-green-500 font-semibold">Read More</a>
      </div>
    );
  };
  
  export default SavedReportsCard;