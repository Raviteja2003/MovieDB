import React from 'react'
import axios from "axios";
import {useState} from "react";
import { apiKey } from '../Api';
const Content = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [data,setData]= useState({});

   const SearchHandler =()=>{
    if(!searchTerm)
    {
      return;
    }
    axios(
      {
      method:"GET",
      url:`http://omdbapi.com/?t=${searchTerm}&&apiKey=${apiKey}`,
      }
    ).then((response)=> {
      setData(response.data);
      console.log(response.data);
    })
    setSearchTerm("");
  }
  return (
    <div className='h-screen w-full bg-slate-800'>
      <div className='w-full flex items-center justify-center pt-7'>
        <input type='text' 
        placeholder='Enter a movie name' 
        className='w-[40%] text-[19px] mr-4 outline-none rounded-md p-2'
        value={searchTerm}
        onChange={e =>setSearchTerm(e.target.value)}></input>
        <button className='text-white border border-white rounded-md p-2 font-bold' 
          onClick={SearchHandler}>
          search
          </button>
          
      </div>
        { Object.keys(data).length > 0 &&
          <div className='mt-10 w-full flex items-center justify-center text-white font-bold flex-wrap'>
              <div>
                <img src={data.Poster} alt="#" className='border border-white rounded-lg'/>
              </div>
              <div className='ml-5 mr-2 p-2 bg-slate-700 rounded-md'>
                <h1>Title: {data.Title}</h1>
                <div className='pt-2'/>
                <p>Director: {data.Director}</p>
                <div className='pt-2'/>
                <p>Genre: {data.Genre}</p>
                <div className='pt-2'/>
                <p>Year: {data.Year}</p>
                <div className='pt-2'/>
                <p>Country: {data.Country}</p>
                <div className='pt-2'/>
                <p>Actors: {data.Actorsr}</p>
                <div className='pt-2'/>
                <p>Language: {data.Language}</p>
                <div className='pt-2'/>
                <p>Rating: {data.imdbRating}</p>
                <div className='pt-2'/>
                <p>Plot: {data.Plot}</p>
              </div>
            </div>
        }
    </div>
  )
}

export default Content