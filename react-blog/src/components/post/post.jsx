import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span> <hr />
        <span className="postDate"></span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        tempora est eaque ut odio maiores ipsum excepturi quasi voluptate magni!
        Quia doloremque distinctio totam suscipit atque eum, modi ratione
        maxime.
      </p>
    </div>
  );
};

export default Post;