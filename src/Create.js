import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    // create a state to track the user input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIspending] = useState(false);

    // invoke the useHistory hook
    const navigate = useNavigate();

    // submit form function
    const handleSubmit = (e) => {
        // prevent the default function of the form being submitted
        // that default function is for the page to refresh
        e.preventDefault();

        setIspending(true);

        // create the blog object
        const blog = { title, body, author };

        //make a post request to the end point url in this case
        fetch('http://localhost:8000/blogs', {
            // track the data and define the type of request we are sending
            method: 'POST',
            // sending the json data
            headers: { "Content-Type": "application/json" },
            // actuak data we are sending
            // turn it from an object into a json string
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            // when its completed
            setIspending(false);

            // go back through history
            // navigate(-1);
            navigate('/');
        })



    }

    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            {/* refrence the handle submit function */}
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >

                </textarea>

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>


                {!isPending && <button>Add Blog</button>}
                {/* when submitting the blog */}
                {isPending && <button disabled>Adding Blog...</button>}


                <br />
                {/* output the tracked changes  */}
                <h5>Tracking user inputs in the fields:</h5>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>



            </form>
        </div>
    );
}

export default Create;