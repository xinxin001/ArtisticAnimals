import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './gan.css';
import { getGeneratedImage } from '../api';

function GAN() {
  const [generatedImage, setImage] = useState(-1);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
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
        <img src={`data:image/png;base64,${generatedImage}`} height="400" width="400">
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
