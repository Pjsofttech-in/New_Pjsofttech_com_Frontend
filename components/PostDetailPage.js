import React from 'react';
import { useParams } from "../router-compat";

function PostDetailPage() {
  const { id } = useParams();

  // Fetch the post details using the id (use a state or context for post data)
  // For example, assuming `posts` is an array in your context:
  // const post = posts.find((p) => p.id === id);

  return (
    <div>
      <h1>Post Details</h1>
      {/* Replace with actual content */}
      <p>This is the post with ID: {id}</p>
    </div>
  );
}

export default PostDetailPage;

