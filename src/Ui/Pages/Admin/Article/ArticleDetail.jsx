// Adjust the path as per your project structure
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import SideBar from '../../../Compunents/SideBar';

const ArticleDetail = () => {
  const { heading, createdAt, readTime, category, reportDescription, image } = useParams();
// alert(createdAt)
  const formatDate = (isoString) => {
    try {
      const formattedDate = format(new Date(isoString), 'MMMM dd, yyyy'); // Adjust the format string as per your requirements
      return formattedDate;
    } catch (error) {
      console.error('Error formatting date:', error);
      return isoString; // Return the original string if formatting fails
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <SideBar />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 pt-0">
          <div>
            <div className='w-full'>
              <img src={image} className='w-[50%] mx-auto' alt="" />
            </div>
            <div className="flex items-center justify-between border-b-2 pb-8">
              <h2 className="text-2xl md:text-4xl font-semibold text-theme">
                {heading}
              </h2>
              <div className="flex items-center justify-between text-secColor font-semibold ">
                {formatDate(createdAt)}
              </div>
            </div>
            <div className="py-8">
              <p className="text-xl md:text-2xl"> {reportDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
