import  BlogContext from "./blogContext";
import { useState } from "react";

const BlogState = (props) => {
  const host = "http://localhost:5000";

  const BlogInitial = [];
  const [blogs, setBlogs] = useState(BlogInitial);


    //Get all Notes
    const getBlogs = async () => {
        //API call
        const response = await fetch(`${host}/api/getblogs`, {
          method: "GET",
    
          headers: {
            "Content-Type": "application/json",
         
          },
        });
    
        const json = await response.json();
        console.log(json);
        setBlogs(json);
      };

      const addblog = async (title, content, thumbnail,author) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzE0MTE4ZDMyMGUwNDE5ZWVjMGY4In0sImlhdCI6MTY3NjA4ODYyMH0.k9Q90VyI0NEiRVodH__S8zTVBHjWcl3tVUYRVH6ceuM",
          },
          body: JSON.stringify({ title, content, thumbnail,author}),
        });
    
        const json = await response.json();
        console.log(json)
        
        console.log("Adding a new blog");
    
        const blog = {

          title: title,
          content: content,
          thumbnail: "personal222",
          author: author,
          date: "2023-02-11T04:11:28.050Z",
          __v: 0,
        };
        setBlogs(blogs.concat(blog));
      };
    


  return (
    <BlogContext.Provider
      value={{ blogs, getBlogs,addblog }}
    >
      {props.children}
    </BlogContext.Provider>
  );

}




export default BlogState;
