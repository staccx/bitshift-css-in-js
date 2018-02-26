import React from "react"

const FeedItemBEM = ({
  fullname,
  username,
  body,
  timestamp,
  likes,
  avatar,
  isNew
}) => (
  <div>
    {fullname}
    {username}
    {body}
    {timestamp}
    {likes}
    <img src={avatar} alt={`Bilde av ${fullname}`} />
  </div>
)

export default FeedItemBEM
