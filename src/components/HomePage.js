import React from 'react';
import {Link} from 'react-router';

const HomePage = () =>(
    <div className="jumbotron-centre">
     <h1 className="lead"> Welcome a test for media library page</h1>
     <div>
      <Link to="library">
       <button className="btn btn-lg btn-primary">Visit Library</button>
      </Link>
     </div>
    </div>)

    export default HomePage; 