import React, { useContext, useEffect, useRef, useState } from "react";
import BlogContext from "../context/blogs/blogContext";
import BlogCard from './BlogCard';


const Blogitems =()=> {
    const context = useContext(BlogContext);
    const { blogs,getBlogs} = context;

    useEffect(()=>{
      getBlogs();
        
      },[]);
  

  return (
        <div className="container mx-auto p-4">
        <div className="flex flex-wrap mx-4">
          
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog}/>
        ))}
        </div>  
             
    </div>
  )
}

export default Blogitems

