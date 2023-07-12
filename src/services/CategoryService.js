import axios from "axios";

const CATEGORY_BASE_URL = 'http://localhost:8080/category';

const categoryService = {
  getCategory() {
    return axios.get(CATEGORY_BASE_URL);
  },

  getCategoryById(categoryId) {
    return axios.get(`${CATEGORY_BASE_URL}/${categoryId}`);
  },

  addCategory(categoryName){
    return axios.post(`${CATEGORY_BASE_URL}?name=${categoryName}`);
  },

  deleteCategory(categoryId){
    return axios.delete(`${CATEGORY_BASE_URL}/${categoryId}`);
  },
  updateCategory(categoryId,newName){
    return axios.put(`${CATEGORY_BASE_URL}/${categoryId}?name=${newName}`);
  }
};

export default categoryService;
