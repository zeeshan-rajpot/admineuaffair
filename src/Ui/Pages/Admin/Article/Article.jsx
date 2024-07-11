import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Upload from "../../../Compunents/Upload";
import Bar from '../../../Compunents/Bar';
import SideBar from '../../../Compunents/SideBar';
import NeedsCard from '../../../Compunents/NeedCars';
import CategorySelector from '../../../Compunents/Category';
import { userApi } from '../../../../api';


const Article = () => {
  const [category, setCategory] = useState('Healthcare');
  const [subcategory, setSubcategory] = useState('');
  const [heading, setHeading] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [articles, setArticles] = useState([]);
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




  const categories = {
    Healthcare: ['Animal health', 'Pharmaceuticals', 'Public health', 'Medical devices', 'Cancer', 'Health policy reforms'],
    Sustainability: ['Renewable energy', 'Climate change', 'Waste management', 'Sustainable agriculture', 'Green technologies'],
    Economy: ['Trade regulations', 'Labor market policies', 'Economic growth initiatives', 'Digital economy'],
    Politics: ['EU legislation', 'International relations', 'Human rights', 'Immigration policy', 'Regional politics'],
  };

  const cards = [
    {
      title: 'The path to technical leadership',
      date: 'Dec 28',
      readTime: '7',
      category: 'Leadership',
      description: 'If software development feels like it is only part of your professional purpose, ...',
      image: 'https://via.placeholder.com/300' // replace with actual image
    },
    {
      title: 'The path to technical leadership: ',
      date: 'Dec 28',
      readTime: '7',
      category: 'Leadership',
      description: 'If software development feels like it is only part of your professional purpose, ...',
      image: 'https://via.placeholder.com/300' // replace with actual image
    },
    {
      title: 'The path to technical leadership: ',
      date: 'Dec 28',
      readTime: '7',
      category: 'Leadership',
      description: 'If software development feels like it is only part of your professional purpose, ...',
      image: 'https://via.placeholder.com/300' // replace with actual image
    }
  ];


  
  
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Log file information
      console.log("Selected file:", file);

      // Upload the image immediately after selection
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('image', file);

      // Log formData content
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      try {
        const response = await userApi.uploadimage(formData);
        // toast.success(response.message);
        setThumbnail(response.url);
        console.log(response.url);
      } catch (err) {
        const errorMessage = err.response?.data?.message || "An error occurred.";
        setError(errorMessage);
        toast.error(errorMessage);
        console.log("Upload error:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    // Allow background scrolling
    document.body.style.overflow = 'auto';
  };



  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const uploadData = {
      category,
      subcategory,
      heading,
      reportDescription,
      thumbnail,
    };

    console.log("Data being uploaded:", uploadData);

    try {
      const upload = await userApi.uploadArticle(uploadData);
      console.log(upload);
      fetchArticles();

      toast.success(upload.message);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred.";
      setError(errorMessage);
      console.log(err);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };




  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Assuming you'll get total pages from API

  const fetchArticles = async (page) => {
    setLoading(true);
    try {
      const response = await userApi.getArticle(page, 10); // Fetch 10 items per page
      setArticles(response.articles || []);
      setTotalPages(response.totalPages || 1); // Adjust as per API response structure
    } catch (err) {
      setError(err.message);
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Toaster />

      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <SideBar />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 ">
          <div className="text-3xl font-semibold mb-4">Article </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex items-center justify-center">
              <CategorySelector />
            </div>
            <div onClick={() => handleCardClick({})}>
              <Upload />
            </div>
          </div>
          <div className="mt-6 ">
            <Bar heading={`Article`} />
          </div>
          <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <NeedsCard key={index} {...article} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
              <ul className="flex">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border ${currentPage === index + 1 ? "text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700" : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
    </div>
        </div>
      </div>





      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center mx-auto z-50 overflow-y-auto max-h-full">
         <div className="bg-white p-8 shadow-lg relative w-full md:w-1/2 rounded-3xl">
        <button 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
        onClick={handleCloseModal}
        >
          <img src="/cancle.png" alt="Close" />
        </button>


        <div className="my-4 mt-10">
        <input
          type="file"
          className="hidden"
          id="thumbnailUpload"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="thumbnailUpload" className="cursor-pointer">
          <div className="w-full h-32 bg-white shadow-lg flex flex-col items-center justify-center rounded-lg">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <>
                <img src="/solar_upload-broken.png" alt="Upload Icon" />
                <p className="text-gray-500">Upload Thumbnail</p>
              </>
            )}
          </div>
        </label>
      </div>


        <div className="mb-4">
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="w-full px-4 py-2 shadow-lg rounded-lg"
                placeholder="Heading Name"
              />
            </div>
        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory(''); // Reset subcategory when category changes
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Subcategory</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {categories[category].map((subCat) => (
              <label key={subCat} className="flex items-center space-x-2">
                <input
              
                  type="radio"
                  name="subcategory"
                  value={subCat}
                  checked={subcategory === subCat}
                  onChange={() => setSubcategory(subCat)}
                  className="form-radio custom-radio"
                />
                <span>{subCat}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
              <textarea
                value={reportDescription}
                onChange={(e) => setReportDescription(e.target.value)}
                className="w-full px-4 py-2 shadow-lg rounded-lg"
                rows="4"
                placeholder="Article"
              ></textarea>
            </div>
        <div className="text-center mt-6">
          <button
          onClick={handleUpload}
          className="px-10 py-2 bg-secColor text-theme hover:bg-transparent border border-secColor hover:text-theme duration-200 font-semibold rounded-full">
            Submit
          </button>
        </div>
      </div>
        </div>
      )}

    </>
  );
};

export default Article;
