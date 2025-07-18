import axios from "axios";

export default async function createClip(clipData) {
  return axios.post('https://outmind-pulse-podcast.onrender.com/clip', clipData)
    .then(function (response) {
      console.log('Clip created successfully:', response.data);
      return response.data;
    }).catch(function (error) {
      console.log('Error creating clip:', error);
      throw new Error('Failed to create clip');
    })
}
