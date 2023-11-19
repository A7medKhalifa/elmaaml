import api from './api';


export const authApi = {
  login: (body: any): any => api.post('api/login', body ),
  register: (body: any): any => api.post('api/register', body ),
  forgetPassword: (body: any): any => api.post('api/forget-password', body ),
  checkResetPassword: (body: any): any => api.post('api/check-reset-password', body ),
  resetpassword: (body: any): any => api.post('api/reset-password', body ),
  verifyUser: (body: any): any => api.post('api/verify-user', body ),

  adminlogin: (body: any): any => api.post('admin/login', body ),

  
};
