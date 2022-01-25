import React,{useEffect,useState} from 'react'

const Fetch = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            response=>response.json()
        ).then(
            // json=>console.log(json)
            json=> setData(json)
        )
    },[])
    return (
        <center>
            <div>
            <h3>Fetch API</h3>
            {/* {data.title} - not works have to use map*/}
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
        </center>
    )
}

export default Fetch
