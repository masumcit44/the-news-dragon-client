import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quo voluptates reiciendis, culpa dignissimos distinctio temporibus, ut incidunt impedit error laudantium accusamus quas nam omnis inventore rem odio aliquid voluptas.</p>
            <p>Go back to <Link to='/register'> Register </Link></p>
        </div>
    );
};

export default Terms;