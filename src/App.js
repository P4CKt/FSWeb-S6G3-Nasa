import React,{useState,useEffect} from "react";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Footer from "./footer";
import axios from "axios";



function App() {

const  [data,setData]=useState("");
const {copyright,explanation,hdurl,media_type,service_version,url,date,title} =data;

//https:api.nasa.gov/planetary/apod?api_key=YL9L5iORlhib1HR9tnoxf5DVNOTacBBFgj2ZGJF0
useEffect(()=>{
axios
.get('https://api.nasa.gov/planetary/apod?api_key=YL9L5iORlhib1HR9tnoxf5DVNOTacBBFgj2ZGJF0&date=2021-12-10')
.then((response)=>{
  console.log(response.data);
  setData({
    copyright: response.data.copyright,
    explanation :response.data.explanation,
    hdurl:response.data.hdurl,
    hdurl:response.data.hdurl,
    media_type:response.data.media_type,
    service_version:response.data.service_version,
    url:response.data.url,
    date:response.data.date,
    title:response.data.title,
    
  })
})
.catch((error)=> console.log(error))},[])
  return (
    

    <div className="App">
       <Header hTitle={"NASAAA"}/>
       <Body copyright={copyright} url={url} explanation={explanation} date={date} title={title}/> 
       <Footer fTitle={"Nasa"}/>
    </div>
  );
}
  
export default App;
//