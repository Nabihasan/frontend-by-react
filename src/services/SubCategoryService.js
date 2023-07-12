import axios from "axios";

const SUBCATEGORY_BASE_URL = 'http://localhost:8080/subcategory';

const subCategoryService = {
  getSubCategory() {
    return axios.get(SUBCATEGORY_BASE_URL);
  },

  getSubCategoryById(subcategoryId) {
    return axios.get(`${SUBCATEGORY_BASE_URL}/${subcategoryId}`);
  },

  addSubCategory(subCategoryName,categoryId){
    return axios.post(`${SUBCATEGORY_BASE_URL}?name=${subCategoryName}&categoryId=${categoryId}`);
  },

  deleteSubCategory(subcategoryId){
    return axios.delete(`${SUBCATEGORY_BASE_URL}/${subcategoryId}`);
  },

  updateSubCategory(subcategoryId,newName){
    return axios.put(`${SUBCATEGORY_BASE_URL}/${subcategoryId}?name=${newName}`);
  }
};

export default subCategoryService;
