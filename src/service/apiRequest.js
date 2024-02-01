import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65ba6debb4d53c066552e2d3.mockapi.io',
});

export const getAllCars = async () => {
  const response = await instance.get(`/catalog`);

  return response.data;
};
