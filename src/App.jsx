import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cats, setCats] = useState([]);
  const [id, setId] = useState([]);
  const [cat, setCat] = useState();
  const [randomId, setRandomId] = useState(``);
  const api_key = 'live_VWyv5EWKyqzuJylVyL1u7DrA6zXGgiS9ZItpD0yJvLWmq9SbRGLIyxqrLhDlfHIE';
  const url_cats = `https://api.thecatapi.com/v1/breeds`;

  const getDataCats = () => {
    axios.get(url_cats)
      .then(res => res.data.map(item => {
        setId(state => {
          state = [...state, item.image && item.image.id];
          return state
        })
      }))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getDataCats();
  }, []);

  // console.log('id', id);

  //NGERANDOM
  // const a = ['aku', 'kamu', 'dia'];
  // const randomA = Math.floor(Math.random()*a.length);
  // console.log('tes', a[randomA])

  const handleRandomId = () => {
    const a = Math.floor(Math.random()*id.length);
    axios.get(`https://api.thecatapi.com/v1/images/${id[a]}`)
      .then(res => setCat(res.data))
      .catch(err => console.log(err))
  };

  // const getDataCat = () => {
  //   axios.get(`https://api.thecatapi.com/v1/images/${randomId}`)
  //     .then(res => console.log(res))
  // }

  // const handleCat = () => {
  //   getDataCat();
  // };

  console.log(cat.url)

  return (
    <div className="App">
      <h1>Catch Cat App</h1>
      <img src={cat.url} style={{width: '150px'}} alt="" />
      {/* {
        cats.map(cat => (
          <>
            <img src={cat.image && cat.image.url} style={{width: '150px'}} alt="" />
            <p>{cat.name}</p>
          </>
        ))
      } */}
      <button onClick={() => {
        handleRandomId();
        }}>ClikMe</button>
    </div>
  );
}

export default App;
