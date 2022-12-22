import React from 'react'
import axios from 'axios'
import {useState,useEffect} from "react"
import {NavLink} from "react-router-dom"

const Header = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    getdata()
  },[])
  const getdata = async()=>{
    try{
      const result = await axios.get('http://localhost:5000/api/getdistinct')
      setData(result.data)
    }
    catch(error){
      console.log(error)
    }
  }
  const blogtype = data.map((d)=>{
    return(

      <li className = "list-group-item"><NavLink to = {`Disp/${d}`}> {d}</NavLink></li>
    )
  })
  return (
    <div className = "container-fluid bg-light">
      <h1>Mike's Blog</h1>
      <ui className = "list-group list-group-horizontal">
        <li className ="list-group-item"><NavLink to = {`/`}>All</NavLink></li>
        {blogtype}
      </ui>
      
    </div>
  )
}

export default Header