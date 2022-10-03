import * as React from 'react';
import Cardblog from './Card-blog';


const Blog = () => {
    return ( 
        <div className="all-blog">
             <h2 className='black-text title '>Latest news</h2>
            <div className="line"></div>
            <div className="blogs">
             <Cardblog/>
             <br/>
             <Cardblog/>
             <br/>
             <Cardblog/>
        <br/>
             <Cardblog/>
             
            </div>
        </div>
     );
}
 
export default Blog;
