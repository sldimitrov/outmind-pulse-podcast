import axios from 'axios';

export default async function subscribeUser(email) {
  return axios.post('https://outmind-pulse-podcast.onrender.com/subscribe', { email })
    .then(function (response) {
      console.log('User subscribed successfully:', response.data);
      return response.data
    }).catch(function (error) {
      console.error('Error subscribing user:', error);
      throw new Error('Failed to subscribe user');
    })
}
