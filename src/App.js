import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // variable
  const title = "Welcome to the new blog"
  return (
     // surround the entire app with the router component
   <Router>
      <div className="App">
          {/* place to nest in the navbar */}
          <Navbar />

          <div className="content">
              {/* <Home /> */}
              <Routes>
                  {/* for home page */}
                    {/* nest the component inside this route that you want the user to see when this page route is visited */}
                    <Route path="/" element={<Home />} />

                    {/* route /create */}
                    <Route path="/create" element={<Create />} />

                    {/* route /blog_details */}
                    <Route path="/blogs/:id" element={<BlogDetails />} />

                    {/* page not found */}
                    <Route path="*" element={<NotFound />} />

              </Routes>
          </div>
      </div>

    </Router>
  );
}

export default App;
