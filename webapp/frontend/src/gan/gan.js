import React, {useState, useEffect} from 'react';
import './gan.css';
import { getGeneratedImage } from '../api';

function GAN() {
  const [generatedImage, setImage] = useState(-1);

  const submitForm = (e) => {
    e.preventDefault();
    getGeneratedImage()
    .then(res => {
      setImage(res.ImageBytes);
    })
  }

  useEffect(() => {
    getGeneratedImage()
    .then(res => {
      setImage(res.ImageBytes);
      })
    }, [])

  return (
      <div className="main-div">
        <p>Sorry, only the dog gallery is available today (￣▽￣*)ゞ</p>
        
        <img className='gallery' src={`data:image/png;base64,${generatedImage}`} alt="doggo" >
        </img>

        <form onSubmit={e => submitForm(e)} >
        <button type="submit">
            Visit New Dog!
        </button>
        </form>

      </div>
  );
}

export default GAN;
