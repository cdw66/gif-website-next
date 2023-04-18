import React from "react";
import { useQuery, gql } from "@apollo/client";

const Home = () => {
  const POSTS = gql`
    query getPosts {
      posts {
        data {
          id
          attributes {
            title
            user
            likes
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            tags {
              data {
                id
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <main>
        <h1 className="text-4xl font-bold">New Posts</h1>
        <div>
          {data.posts.data.map((post) => {
            // console.log(post.attributes.title);
            return <h3 key={post.id}>{post.attributes.title}</h3>;
            // <h3>POST</h3>;
          })}
          {console.log(data)}
        </div>
      </main>
    </>
  );
};

export default Home;
