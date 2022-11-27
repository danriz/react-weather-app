
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import City from './City';
function App() {
  const key="1ce9c19dc266c59585b12096cabf85d2";
  const [search,setSearch]=useState("");
  const [city,setCity]=useState();
useEffect(() => {

  async function getApi() {


    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
      console.log(response);
      setCity(response.data);
    } catch (error) {
      console.error(error);
    }
  }
getApi();
},[search])
console.log(search);
  return (
    <div className="App">
     hello
     <div>
     <input onChange={(e)=> setSearch(e.target.value)}
     className="border-8" type="text"/>
     
     <City city={city}/>
     </div>


    </div>



  );
}

export default App;
