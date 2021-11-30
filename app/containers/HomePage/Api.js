import axios from 'axios';

export async function getData() {
  return axios.get('https://60c97304772a760017203839.mockapi.io/api/users');
}
