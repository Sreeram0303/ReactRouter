import React from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Sreeram0303').then(res => res.json()).then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github

export const githubLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Sreeram0303');
    return response.json();
}