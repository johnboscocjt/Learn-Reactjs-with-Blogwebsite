import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>That page can not be found</p>
            <Link to = "/">Back to Home page</Link>
        </div>
        
     );
}
 
export default NotFound;