import React, { useContext, useState } from 'react';
import BlogContext from "../context/blogs/blogContext";

const AddBlog = () => {
  const context = useContext(BlogContext);
  const { addBlog } = context;

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    thumbnailUpload: null, // Store the selected image file
  });

  const handleChange = (e) => {
    if (e.target.name === "thumbnailUpload") {
      // Handle image upload
      setBlog({ ...blog, [e.target.name]: e.target.files[0] });
    } else {
      // Handle other input fields
      setBlog({ ...blog, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the blog data along with the image
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    formData.append("author", blog.author);
    formData.append("thumbnailUpload", blog.thumbnailUpload);

    // Call the addBlog function with the FormData
    addBlog(formData);

    // Clear the form
    setBlog({
      title: "",
      content: "",
      author: "",
      thumbnailUpload: null,
    });
  };

  return (
    <div className="container my-3">
      <h1>Add a Blog</h1>

      <form className="my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" placeholder="Give a title" className="form-control" id="title" name="title" onChange={handleChange} value={blog.title} required />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea placeholder="Add Content" className="form-control" id="content" name="content" onChange={handleChange} value={blog.content} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" placeholder="Add an author" className="form-control" id="author" name="author" onChange={handleChange} value={blog.author} required />
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnailUpload" className="form-label">Thumbnail Image</label>
          <input type="file" className="form-control" id="thumbnailUpload" name="thumbnailUpload" onChange={handleChange} accept="image/*" required />
        </div>

        <button type="submit" className="btn btn-success">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
