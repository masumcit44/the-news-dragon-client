import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res=>res.json())
        .then(data=> setCategories(data) )
    },[])
    return (
        <div>
            <h4>All Caterogy</h4>
            <div className='ps-4'>
            {
                categories.map(catagory => 
                <p key={catagory.id}>
                    <Link to={`/category/${catagory.id}`} className='text-decoration-none text-black'> {catagory.name} </Link>
                    </p>
                 )
            }
            </div>
        </div>
    );
};

export default LeftNav;