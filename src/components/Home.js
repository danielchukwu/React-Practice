import useFetch from "../hooks/useFetch"
import BlogList from "./BlogList"


const Home = () => {
   const topic = 'nba'
   const {blogs, setBlogs} = useFetch(`https://newsapi.org/v2/everything?q=${topic}`)
   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.source.id !== id)
      setBlogs([...newBlogs])
   }

   return (
      <div className="home">
         {blogs && <BlogList blogs={ blogs } setBlogs={setBlogs} handleDelete={ handleDelete } title="All Blogs" />}
         {!blogs && <h1>Loading</h1>}
      </div>
   )
}

export default Home;