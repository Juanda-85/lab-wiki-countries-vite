import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { useEffect, useState } from "react";


function App() {
  
  
  const ApiUrl = "https://ih-countries-api.herokuapp.com/countries"

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState (true)

  useEffect( ()=>{
    fetch(ApiUrl)
    .then((res)=>{
      return res.json
    })
    .then((countries)=>{
      setLoading(false)
      setCountries(countries);
    })
    .catch((err)=>console.log(err))
  }, [])
  
  
  
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      {loading ? <p>Page is loading...</p>:
      <Routes>
      <Route path="/" element={<HomePage countries={countries} />}/> 
      <Route path="/:countryId" element={<CountryDetailsPage countries={countries}/>}/>

      </Routes>


      }
    </div>
  );
}

export default App;
