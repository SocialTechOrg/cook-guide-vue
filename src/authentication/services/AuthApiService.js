import axios from "axios";

const http = axios.create({
baseURL:'http://localhost:5126/api/v1'
});

export class AuthApiService {

    signUp(data){
        return http.post('/accounts/sign-in', data)
    }

    getUserById(id){
        return http.get(`${id}`)
    }
    
    async login(data) {
        return http.post('/accounts/log-in', data)
    }

    updateAccount(userId, data) {
        return http.put(`/user/${userId}`, data)
    }

    deleteAccount(userId) {
        return http.delete(`/user/${userId}`)
      }
}