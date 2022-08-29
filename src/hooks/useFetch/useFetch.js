import { useEffect,useState } from "react";
import axios from 'axios';

function useFetch(url){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          const {data: responseData} = await axios.get(url)
          setData(responseData)
          setLoading(false)
          console.log(data,'asdasd*****')
        } catch (err) {
          setError(err.message);
          setLoading(false)
        }
      }

    const refetch =async()=>{
      try {
        const {data: responseData} = await axios.get(url)
        setData(responseData)
        setLoading(false)
        console.log(data,'asdasd777777')
      } catch (err) {
        setError(err.message);
        setLoading(false)
      }
    } 

    useEffect(() => {
        fetchData();
    }, [])

    return {error,loading,data,refetch};
}

export default useFetch;