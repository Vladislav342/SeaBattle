import React from "react";
import axios from "axios";

const baseURL = "/auth/me";


debugger

export default function Header_2() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.id}</h1>
      <p>{post.login}</p>
    </div>
  );
}
