import BlogList from './BlogList';
import useFetch from './useFech';

const Home = () => {
//  destructure the 3 parameters passed from the custom made hook
// as the parameter , remember to pass the end point, whereby in this case is the url for db.json
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    // const [name, setName] = useState('mario');


    // function to delete the blog in here, so that we can interact with data directly
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     // set the new blogs value now after delete
    //     setBlogs(newBlogs);
    // }

   

    return (  
        <div className="home">
         {/* nesting the bloglist component into the home component right here */}
         {/* <BlogList blogs = {blogs} title = {"All blogs!"} /> */}
         {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title = {"Mario's blogs!"} /> */}
         {/* {blogs && <BlogList blogs = {blogs} title = {"All blogs!"} handleDelete={handleDelete} />} */}
         {/* <button onClick={() => setName('luigi')}>Change name</button> */}
         {/* <p>{name}</p> */}

        { error && <div> {error} </div>}

         {/* loading message */}
         {isPending && <div>Loading data...!</div>}




         {/* conditional templating */}
         {blogs && <BlogList blogs = {blogs} title = {"All blogs!"} />}

        </div>
    );
}
 
export default Home;