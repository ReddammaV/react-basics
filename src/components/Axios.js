import axios from 'axios'
import React,{useState, useEffect} from 'react'

const Axios = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      // response=> console.log(response)
      // response=> console.log(response.data)
      response=> setData(response.data)
    )
  }, [])
  return (
    <center>
      <div>
        <h3>Axios</h3>
        {/* {data.title} */}
        {data.map(item => <li key={item.id}>{item.title}</li>)}
      </div>
    </center>
  )
}

export default Axios
