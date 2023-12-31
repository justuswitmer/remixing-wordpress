import Post from "../components/Post"
import Header from "../components/Header"
import { useLoaderData } from "@remix-run/react"
import { gql } from "@apollo/client"
import { client } from "../lib/apollo"

export async function loader() {
  const PostsQuery = gql`
  query getPosts {
    posts(first: 100) {
      nodes {
        title
        content
        date
        slug
      }
    }
  }
    `
  const response = await client.query({
    query: PostsQuery
  })

  const posts = response?.data?.posts?.nodes

  return posts
}


export default function Index() {
  const posts = useLoaderData();

  return (
    <div>
      <Header title="Home Page" ></Header>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        {posts.map((post, i) => {
          console.log(post);
          return (
            <Post post={{ ...post, index: i + 1 }} key={post.title}></Post>
          )
        })}
      </div>
    </div>
  );
}
