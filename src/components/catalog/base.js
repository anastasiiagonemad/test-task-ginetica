import axios from 'axios';

export const productBase = axios
  .get('https://fakestoreapi.com/products')
  .then((response) => response.data)
  .catch((error) => {
    console.error('Ошибка при загрузке данных', error);
  });
