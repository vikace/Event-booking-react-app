import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Aboutus() {
  console.log("hello from aboutus")
  const [id,setId]=useState([]);
  const [formData,setFormData]=useState(new FormData());
  const [url,setUrl]=useState('');
  useEffect(()=>{
    axios.get("https://api.bobbleapp.me/v4/gifs?page=0&limit=2&searchString=holi").then(response=>{
      setId(response.data.gifs);
    }).catch(err=>{
      console.log(JSON.stringify(err));
    })
  },[])
  function handleSubmit(e)
  {
    e.preventDefault();
    axios.post(`https://gifs-content-api.bobbleapp.me/v1/gifs/${id[0].id}`,formData,{
      'Content-Type':'multipart/form-data'
    }).then(response=>{
      setUrl(response.data.url);
    })
    
  }
  function handleChange(e)
  {
    const formData=new FormData()
      formData.append("image",e.target.files[0]);
      formData.append("bobbleType",2101);
      setFormData(formData);
  }
  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <input type='file' name='image' onChange={(e)=>handleChange(e)} />
        <input type="submit" value={"Submit"}  className=" cursor-pointer py-2 px-3 w-[30%] h-14 border rounded-2xl font-semibold focus:border-sky-400 bg-sky-400 text-white outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200" />
      </form>
      {url?<img src={url}></img>:null}
    </div>
  )
}
