import React,{useState,useEffect} from "react";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Footer from "./footer";
import axios from "axios";
import Search from "./search";



function App() {

const  [data,setData]=useState("");
const  [tarih,setTarih]=useState("2022-01-02");
const {copyright,explanation,hdurl,media_type,service_version,url,date,title} =data;

const changeHandler= (e)=>{
setTarih(e);
}

//https:api.nasa.gov/planetary/apod?api_key=YL9L5iORlhib1HR9tnoxf5DVNOTacBBFgj2ZGJF0
useEffect(()=>{
axios
.get('https://api.nasa.gov/planetary/apod?api_key=YL9L5iORlhib1HR9tnoxf5DVNOTacBBFgj2ZGJF0&date='+tarih)
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
.catch((error)=> console.log(error))},[tarih])
  return (
    

    <div className="App">
       <Header hTitle={"NASAAA"}/>
        <Search tarih={tarih} changeHandler={changeHandler}/>
       <Body copyright={copyright} url={url} explanation={explanation} date={date} title={title}/> 
       <Footer fTitle={"Nasa"}/>
    </div>
  );
}
  
export default App;
//