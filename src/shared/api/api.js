import axios from 'axios';

export const api = (url, options) => axios(url, options)
  .then((response) => {
    if (!response.status) {
      throw new Error(response.error || 'Something went wrong');
    }
    return response.data;
  });

export const getApi = (url, options) => api(url, {
  method: 'get',
  ...(options && options),
})

export const postApi = (url, data) => axios.post(url, JSON.stringify(data))
