import axios from 'axios';
export let totalResponseElements;
export default async function fetchImg(query, page) {
  axios.defaults.baseURL = 'https://api.unsplash.com/';

  const response = await axios.get(`search/photos`, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: 'Client-ID Mc1X_PW39wt2ha0wuA-0xh8QopmkBcJ3ZK_c2MmFoX8',
      'Accept-Version': 'v1',
    },
  });
  totalResponseElements = response.data.total;

  return response.data.results;
}
