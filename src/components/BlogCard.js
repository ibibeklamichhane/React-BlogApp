import React from 'react';


function BlogCard({blog}) {
  return (
    <div className="w-1/3 p-4">
  <div className=" shadow-outer hover:shadow-inner transition-all duration-1000 ease-in-out content-center bg-slate-200  border border-green-300 rounded-lg shadow-md overflow-hidden mt-6">
     
      <img src={blog.thumbnail} alt={blog.title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.content.substring(0, 150) + '...'}</p>

        <div className="flex items-center">
            <p className="text-gray-700 ml-2">{`Posted by ${blog.author}`}</p>
          </div>
       
        <div className="flex justify-between items-center">
        <p className="text-gray-500 mt-1">{new Date(blog.date).toDateString()}</p>
        <button className=" shadow-outer hover:shadow-inner transition-all duration-1000 ease-in-out mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none cursor-pointer">
              Read More
          </button>
          </div>

      </div>
    </div>
    </div>
  );
}

export default BlogCard;
