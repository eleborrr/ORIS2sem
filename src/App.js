import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import CustomDogList from './DogsPage/components/CustomDogList';
import CustomDogSingle from './DogsPage/components/CustomDogSingle';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [data, setData] = useState([]);
  let [_url, setUrl] = useState([]);
  let [dogSelected, setDog] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
    'x-api-key': 'live_uHEGrtwvPgPiD7TszN8oi4nstwMN20qE8ozRYxaXvIau5LOtARfFl6YIAMWHYzSB'},
    };
  

  fetch(`https://api.thedogapi.com/v1/breeds?limit=10&page=0`, requestOptions)
    .then(response => response.json())
    .then(data => setData(data));
  }, [])    


  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json',
    'x-api-key': 'live_uHEGrtwvPgPiD7TszN8oi4nstwMN20qE8ozRYxaXvIau5LOtARfFl6YIAMWHYzSB',
    "Access-Control-Allow-Origin" : "*", 
    "Access-Control-Allow-Credentials" : true},
    mode: "no-cors"
  };
  
  data.forEach(async element => {
    let url = 'https://api.thedogapi.com/v1/images/search?breed_ids=' + element.id
    let content = await axios.get(url, requestOptions)
    _url = content.data[0]['url']
    element.image_src = _url
    console.log(element)
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<CustomDogList data={data} setDogSelected={setDog}></CustomDogList>}></Route>
        <Route path=":id" element={<CustomDogSingle item={dogSelected}/>}></Route>
      </Routes>
    </>
  );
}


export default App;
