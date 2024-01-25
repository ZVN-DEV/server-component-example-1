import { Suspense } from "react";
import Card from "./component/Card";
async function PostTitle() {
  const data = await fetch("https://dummyjson.com/users");
  const postsResponse = await data.json();
  const posts = postsResponse.users;
  const mappedPosts = posts.map((post: any) => {
    return post;
  });

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr);",
    gap: "20px",
    gridAutoRows: "minmax(100px, auto);",
  };

  return (
    <>
      <div style={gridContainerStyle}>
        {mappedPosts.map((p: any) => (
          <Card
            key={p.id}
            image={p.image}
            firstName={p.firstName}
            lastName={p.lastName}
            email={p.email}
          />
        ))}
      </div>
    </>
  );
}
export default function ServerComponent() {
  return (
    <section>
      <h1>User Cards</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <PostTitle />
      </Suspense>
    </section>
  );
}
