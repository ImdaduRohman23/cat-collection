import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cats, setCats] = useState([]);
  const api_key = 'live_VWyv5EWKyqzuJylVyL1u7DrA6zXGgiS9ZItpD0yJvLWmq9SbRGLIyxqrLhDlfHIE';
  const url_cats = `https://api.thecatapi.com/v1/breeds`;

  const getDataCats = () => {
    axios.get(url_cats)
      // .then(res => setCats(res.data))
      // .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getDataCats();
  }, []);

  console.log('cats', cats);

  const a = ['aku', 'kamu', 'dia'];
  const randomA = Math.floor(Math.random()*a.length);
  console.log('tes', a[randomA])




  return (
    <div className="App">
      <h1>Catch Cat App</h1>
      {/* {
        cats.map(cat => (
          <>
            <img src={cat.url} style={{width: '150px'}} alt="" />
            <p>{cat.breeds[0].name}</p>
          </>
        ))
      } */}
    </div>
  );
}

export default App;
