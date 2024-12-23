import { useState, useEffect } from 'react';


// custom hook
// everytime the rurl changes then, it is going to rerender

const useFetch = (url) => {
    // create some state properties so you can destructure the value
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


     // this function fires on every render, watch the value that changes
     useEffect(() => {
        // abort controller we can associate it with a specific fetch request, and we can use it to stop the fetch
        const abortCont = new AbortController();


        // set timeout to load data
        setTimeout(() => {
             // fetch data using endpoints
        fetch(url, {signal: abortCont.signal})
        // endpoint which return the promise, response object
            .then(res => {
                // checking the response object
                if(!res.ok){
                    // if no response , throw an error fromthe server
                    throw Error('Could not fetch the data for that resource');
                }

                // get the data
                return res.json();
            }) 
            .then(data => {
                setData(data);
                //after loading data set isPending to be false
                setIsPending(false);  
                setError(null);  
            })
            // will catch any kind of network error
            .catch(err => {
                // if we get an abort error
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    // if we get a different kind of error we want the user to know
                    setIsPending(false);
                    setError(err.message);
                }

                // setError(err.message);
                // setIsPending(false);
            })
        }, 1000) // set time, eg 1000milliseconds for loading
       
        return () => abortCont.abort();
    }, [url]);

    // using the objects makes it more easy, because the order of the properties in the custom hook doesnt matter
    // return some values, you can any object, it could ebe an array,string, or boolean or a usestate
    return { data, isPending, error }
}

// export the function
export default useFetch;