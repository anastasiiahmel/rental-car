import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65ba6debb4d53c066552e2d3.mockapi.io',
});

export const getAllCars = async (page) => {
  const response = await instance.get(`/catalog/?limit=12&page=${page}`);
  return response.data;
};

export const getFilterCars = async () => {
  const response = await instance.get(`/make`);
  return response;
};
