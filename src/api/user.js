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

  const getReport = async () => {
    try {
      const response = await apiClient.get(`admin/reports?page=${1}&limit=${10}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
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
  
  const getArticle = async () => {
    try {
      const response = await apiClient.get(`admin/articles?page=${1}&limit=${10}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
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
  const getNews = async () => {
    try {
      const response = await apiClient.get(`admin/news?page=${1}&limit=${10}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
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
};