import Post from "./Post";

const post = [
  {
    id: "123",
    username: "adekola",
    userImg: "./profile.jpg",
    img: "./profile.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "adekola",
    userImg: "./profile.jpg",
    img: "./profile.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "adekola",
    userImg: "./profile.jpg",
    img: "./profile.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "adekola",
    userImg: "./profile.jpg",
    img: "./profile.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
];
function Posts() {
  return (
    <div>
      <Post
        key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
