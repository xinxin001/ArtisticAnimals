import axios from 'axios';

export const getGeneratedImage = () => {
  return axios.post('/generate/image')
  .then(res => {
    console.log(res)
    return res.data;
  })
  .catch(err => {
    alert(err);
  })
}
