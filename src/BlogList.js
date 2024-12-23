import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    // access the data from parent component by props
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
               {/* looping through an array of blogs and outputting each one of them */}
               <h2>{title}</h2>
               {blogs.map((blog) => (
                // blog preview to output
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                   
                    {/* <button onClick = {() => handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            
            ))}
        </div>
     );
}
 
export default BlogList;