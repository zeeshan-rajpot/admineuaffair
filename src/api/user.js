import apiClient from '../utils/apiClient';

const login = async (credentials) => {
    try {
        const response = await apiClient.post('admin/login', credentials);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

const uploadimage = async (formData) => {
    try {
      const response = await apiClient.post(`admin/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  




const uploadReports = async (uploadData) => {
    try {
      const response = await apiClient.post(`admin/reports` , uploadData);
      return response.data;
    } catch (error) {
      console.error("Error fetching moods:", error);
      throw error;
    }
  };

  const getReport = async (page = 1, limit = 10) => {
    try {
      const response = await apiClient.get(`admin/reports?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching reports:", error);
      throw error;
    }
  };

  const uploadArticle = async (uploadData) => {
    try {
      const response = await apiClient.post(`admin/articles` , uploadData);
      return response.data;
    } catch (error) {
      console.error("Error fetching moods:", error);
      throw error;
    }
  };
    
  const uploadBlogs = async (uploadData) => {
    try {
      const response = await apiClient.post(`admin/blogs` , uploadData);
      return response.data;
    } catch (error) {
      console.error("Error fetching moods:", error);
      throw error;
    }
  };
  
  const getArticle = async (page = 1, limit = 10) => {
    try {
      const response = await apiClient.get(`admin/articles?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  };
  
  const uploadnews = async (uploadData) => {
    try {
      const response = await apiClient.post(`admin/news` , uploadData);
      return response.data;
    } catch (error) {
      console.error("Error fetching moods:", error);
      throw error;
    }
  };


  const getNews = async (page = 1, limit = 10) => {
    try {
      const response = await apiClient.get(`admin/news?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  };
  

 const getuser = async (page = 1, limit = 5) => {
  try { 
    const response = await apiClient.get(`admin/users?page=${page}&limit=${limit}&sortBy=createdAt&order=desc`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};



const getRequests = async () => {
  try {
    const response = await apiClient.get(`admin/requests`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};const getplans = async () => {
  try {
    const response = await apiClient.get(`admin/plans`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};



const uploadplans = async (planData) => {
  try {
    const response = await apiClient.post(`admin/update-price` , planData);
    return response.data;
  } catch (error) {
    console.error("Error fetching moods:", error);
    throw error;
  }
};


const getmesseges = async () => {
  try {
    const response = await apiClient.get(`admin/messages?order=asc&sortBy=name`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};const getusersDetail = async () => {
  try {
    const response = await apiClient.get(`admin/usersDetail`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
const getblogs = async (page =1 ,limit=10) => {
  try {
    const response = await apiClient.get(`admin/blogs?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const getDashBoardIntrest = async (activeButton) => {
  try {
    const response = await apiClient.get(`admin/user/total/interests?period=${activeButton}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const getDashBoardusers = async (activeButton) => {
  try {
    const response = await apiClient.get(`admin/user/total?filter=${activeButton}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};



const uploadRequests = async (data , requestId) => {

  try {
      const response = await apiClient.post(`admin/requests/respond/${requestId}`, data);
      return response.data;
  } catch (error) {
      console.error("Error logging in:", error);
      throw error;
  }
};

export default {
    login,
    uploadimage,
    uploadReports,
    getReport,
    uploadArticle,
    uploadnews,
    getArticle,
    getNews,
    getuser,
    getusersDetail,
    getRequests,
    uploadRequests,
    getDashBoardIntrest,
    getmesseges,
    getDashBoardusers,
    getblogs,
    uploadBlogs,
    uploadplans,

    getplans,
};