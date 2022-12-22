import React from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const Display = () => {
    const [data,setData] = useState([])
    const params = useParams()
    useEffect(()=>{
        getdata()
    },[params.id])
    const getdata = async()=>{
        try{
            if(params.id){
                let result = await axios.get(`http://localhost:5000/api/dispRecord1/${params.id}`)
                setData(result.data)
            }
            else{
                let result = await axios.get(`http://localhost:5000/api/dispRecord`)
                setData(result.data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const dispdata = data.map((d)=>{
        return(
            <div className = "container-fluid bg-light">
                <div className = "row text-start">
                    <div className = "col">
                        <h2>{d.blog}</h2>
                    </div>
                </div>
                <div className = "row text-start">
                    <div className = "col">
                        <h5>{d.blog_type}</h5>
                    </div>
                </div>
                <div className = "row text-start">
                    <div className = "col">
                        <h6>{d.create_by}</h6>
                    </div>
                </div>
                <div className = "row text-dark nb-3 text-wrap">
                    <div className = "col">
                        {d.blog_description}
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div>
        {dispdata}
    </div>
  )
}

export default Display