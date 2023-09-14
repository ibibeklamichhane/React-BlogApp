import React from 'react'
import BlogCard from './BlogCard';

function Blogitems() {

  const blogData = [{
    id: 1,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  },
  {
    id:2,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  },
  {
    id:3,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  },
  {
    id:4,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  },
  {
    id:5,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  },
  {
    id:6,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  },
  {
    id:7,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  },
  {
    id:8,
    title: 'Example Blog Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    image: require('./book.jpg'),
    author: {
      name: 'John Doe',
      avatar: require('./Avatar.jpg'),
    },
    date: '2023-08-12T12:00:00Z',
  }
]
  

  return (
        <div className="container mx-auto p-4">
        <div className="flex flex-wrap mx-4">
          
        {blogData.map(blog => (
          <BlogCard key={blog.id} blog={blog}/>
        ))}
        </div>  
             
    </div>
  )
}

export default Blogitems

