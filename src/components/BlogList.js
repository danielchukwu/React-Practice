const BlogList = ({ blogs, title, handleDelete}) => {

   return (
      <div className="blogList">
         <h2>{title}</h2>
         {blogs.map(blog => {
            return (
               <div className="blog-preview" key={blog.id}>
                  <h2>{ blog.title }</h2>
                  <p>Written by { blog.source.name }</p>
                  <button onClick={() => handleDelete(blog.source.id)}>Delete Blog</button>
               </div>
               )
            }) 
         }
      </div>
   )
}

export default BlogList;