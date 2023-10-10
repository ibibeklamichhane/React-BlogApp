import React from 'react'
import BlogCard  from './BlogCard';
import Blogitems  from './Blogitems';

import AddBlog from './AddBlog';

function Blogs() {
  return (
    <>
    <h4 className = 'text-center text-bold mt-4'>All Blogs</h4>
     <Blogitems/>
     <AddBlog />

    

    </>
    
  )
}

export default Blogs;