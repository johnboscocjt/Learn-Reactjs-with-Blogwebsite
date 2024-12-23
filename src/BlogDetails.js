import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFech";

const BlogDetails = () => {
    // allows to grab route parameters from the routes, destructure whatever route parameters we want
    const {id} = useParams();

    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();

    // function to delete the blog
    const handleClick = () => {
        // make a fetch request which is going to be a delete request
        fetch('http://localhost:8000/blogs/' + blog.id, {
            // telling the json server to delete the blog with this id
            method: 'DELETE'
        }).then(() => {
            // redirect the user to the home page, once the delete is over
            navigate('/');
        })

    }


    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
            {isPending && <div>Loading ...</div>}
            { error && <div>{error}</div>}

            {/* output some kind of template () */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written  by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;