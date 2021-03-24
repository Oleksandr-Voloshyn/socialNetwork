import * as axios from "axios";


const instance = axios.create({
  withCredentials:true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f8921bc6-1738-490e-99f4-8cd4e4001c2a'
  }

})

export const apiUsers = {
  getUsers (currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  postUsers(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => response.data)

  },

  deleteUsers(id) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  },

};

export const apiHeader = {
  authMe () {
    return instance.get(`auth/me`)
  },
  login (email, password, rememberMe = false) {
    return instance.post(`auth/me`, {email, password, rememberMe})
  },
  logout () {
    return instance.delete(`auth/login`)
  }
}

export const apiProfile = {
  profileId (userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`,{status})
  }
}
