import { fetchData } from "../main";
import { useState } from "react";

function Profile() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        title: "",
        content: ""
    });

    const { title, content } = post;

    const onChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
        title,
        content,
        username: localStorage.getItem("username") || "Demo User"
    };

    fetchData("/posts", newPost, "POST")
    .then((data) => {
        console.log(data);
        setPosts([...posts, newPost]);
        setPost({
            title: "",
            content: ""
        });
    })
    .catch((error) => {
        console.log(error);
        setPosts([...posts, newPost]);
        setPost({
            title: "",
            content: ""
        });
    });
};

    return (
        <main className="container main-container">
            <h1>Profile</h1>
            <p>Username: {localStorage.getItem("username") || "Demo User"}</p>

            <div className="card form-card">
                <h2>Create Post</h2>

                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={title}
                            onChange={onChange}
                            placeholder="Post title"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea
                            className="form-control"
                            name="content"
                            value={content}
                            onChange={onChange}
                            placeholder="Write your post"
                        />
                    </div>

                    <button className="btn btn-success w-100" type="submit">
                        Create Post
                    </button>
                </form>
            </div>

            <div className="mt-4">
                <h2>Your Posts</h2>

                {posts.map((post, index) => (
                    <div className="card form-card" key={index}>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Profile;