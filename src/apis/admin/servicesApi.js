import axiosClient from '../axiosClient';

const servicesApi = {
  getAll() {
    const url = '/services';
    return axiosClient.get(url);
  },
};

export default servicesApi;
