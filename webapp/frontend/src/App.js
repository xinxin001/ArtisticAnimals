import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import GAN from './gan/gan'
import TopBar from './topbar/topbar';

function App() {
  const [prediction, setPrediction] = useState(-1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    axios.post('/predict/image', formData)
    .then(res => {
      setPrediction(res.data)
    })
    .catch(err => {
      alert(err);
    })
  }

  const setFileAndImage = (file) => {
    setSelectedFile(file);
    setImage(URL.createObjectURL(file));
  }


  return (
    <Router>
      <div className="App">
      <Switch>

        <Route path="/">
          <TopBar title="Gallery of Totally Real Animals"/>
          <GAN/>
        </Route>
        
      </Switch>
      </div>
    </Router>

  );
}

export default App;
