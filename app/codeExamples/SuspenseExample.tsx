import { Suspense } from "react";
async function PostTitle() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await data.json();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
export default function Page() {
  return (
    <section>
      <h1>Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <PostTitle />
      </Suspense>
    </section>
  );
}
