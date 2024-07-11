import { Link } from "react-router-dom";
import { format } from 'date-fns';
const SavedReportsCard = ({ heading, createdAt, readTime, category, reportDescription  }) => {
  const formatDate = (isoString) => {
    return format(new Date(isoString), 'MMMM-dd');
  };
    return (
      <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>{formatDate(createdAt)}</span>
          <span className="ml-4 text-secColor">{category}</span>
          <span className="ml-auto">{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-theme" >{heading}</h3>
        <p className="text-gray-600 mb-4">{reportDescription}</p>
        <Link
         to={`/ReportsDetail/${encodeURIComponent(heading)}/${encodeURIComponent(createdAt)}/${encodeURIComponent(readTime)}/${encodeURIComponent(category)}/${encodeURIComponent(reportDescription)}`}
        className="text-green-500 font-semibold"
      >
        Read More </Link>
      </div>
    );
  };
  
  export default SavedReportsCard;