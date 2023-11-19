import api from './api';


export const userApi = {
  FindLab: (body: any) => api.post(`api/find-factory`, body),
  showResults: (body: any) => api.post(`api/show-document`, body),
  editProfile: (body: any) => api.post(`api/edit_profile`, body),
  getProfile: () => api.get(`api/profile`),
  editPassword: (body: any) => api.post(`api/change-password`, body),
  deleteProfile: () => api.get(`api/delete`),
  getOffers: (body: any) => api.post(`api/show-offers`, body),
  editFactory: (body: any): any => api.post('admin/edit-factory', body),
  addDocument: (body: any): any => api.post('admin/add-document', body),
  getAllusers: (name: any): any => api.get(`admin/all-users?name=${name}`),
  showAdminResults: (body: any) => api.post(`admin/show-document`, body),
  deleteDocument: (body: any) => api.post(`admin/delete-document`, body),
  getAdminOffers: (body: any) => api.post(`admin/show-offer`, body),
  addAdminOffers: (body: any) => api.post(`admin/add-offer`, body),
  deleteAdminOffers: (body: any) => api.post(`admin/delete-offer`, body),
  editAdminOffers: (body: any) => api.post(`admin/edit-offer`, body),
  editPasswordAdmin: (body: any) => api.post(`admin/change-password`, body),

  addAdminForm3ml: (body: any) => api.post(`admin/register`, { ...body }),
  changepasswordsuperadmin: (body: any) => api.post(`admin/change-password-super-admin`, { ...body }),
  changeUserForm3ml: (body: any) => api.post(`admin/change-user-password`, { ...body }),
  addNewM3ml: (body: any) => api.post(`admin/create-factory`, { ...body }),
  activation: (body: any) => api.post(`admin/activation`, { ...body }),
  ListM3ml: () => api.get(`admin/all-m3ml`),
  ListUsers: (name: any) => api.get(`admin/all-users?name=${name}`),

}