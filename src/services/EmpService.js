import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/auth";

const EmpService = {
    getAllEmp(){
        return axios.get(BASE_API_URL+"/user");
        },
        getEmpById(id){
            return axios.get(BASE_API_URL+"/user/"+id);
        },
        saveEmp(emp){
            return axios.post(BASE_API_URL+"/signup",emp);
        },
        // deleteEmp(id){
        //     return axios.delete(BASE_API_URL+"/user/"+id);
        // },
        // updateEmp(id,emp){
        //     return axios.put(BASE_API_URL+"/user/"+id,emp);
        // }
};

export default EmpService;