import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/Panjoy1520')
    //     .then(res => res.json()
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // )
    // },[])

  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
        Github Followers :{data.login} 
        <img src={data.avatar_url} alt='Github pic'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await 
    fetch('http://api.github.com/users/Panjoy1520')
    return response.json()
}