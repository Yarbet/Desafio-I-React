/* eslint-disable react/prop-types */
import { PostCard } from "./PostCard"

export const PostsGrid = ({ posts }) => {
    console.log(posts)
  return (
        <>
            <div className="flex">
                {posts.length ? ( 
                        posts.map((item) => <PostCard {...item} />)
                    ) : (
                        <h1>No hay Posts</h1>
                    )
                }
            </div>
        </>
  )
}