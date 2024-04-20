/* eslint-disable react/prop-types */


import { Tag } from "./Tag";

export const PostCard = ({
  id,
  description,
  image_url,
  likes,
  tokens_per_like,
  author,
  created_at,
  tags,
}) => {
  return (
    <>
        <div>
            <img 
            src= {image_url}
            alt="" />
            <p>{description}</p>
            <button>
                <span>likes: { likes}</span>
            </button>
            <p>
            <strong>{author.name}</strong>
            </p>
            <p>
            <small> {created_at}</small>
            </p>
            
            <div>
                { tags.length && 
                    tags.map((tag) => (
                    <Tag 
                        text={tag} 
                        color="bg-success"
                    /> 
                   ))}
            </div>
           
        </div>
    
    </>
  )
};
