import {useState, useEffect} from 'react'

const useFetch = (url) => {
   const [blogs, setBlogs] = useState(null)
   
   useEffect(()=> {
      fetch(url, {
         method: "GET",
         headers: {
            "Authorization": `${process.env.REACT_APP_API_KEY}`
         }
      })
      .then(res => {
         if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
         }
         return res.json()
      })
      .then(data => {
         console.log(data)
         setBlogs(data.articles)
      })
      .catch(err => {
         console.log(err.message)
      })
   }, [])

   return {blogs, setBlogs}
}

export default useFetch;