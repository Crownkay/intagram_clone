import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "adekola",
    userImg: "./ADENIRAN.jpg",
    img: "./ADENIRAN.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "2",
    username: "Crownkay",
    userImg: "./profile.jpg",
    img: "./profile.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "2",
    username: "Crownkay",
    userImg: "./profile.jpg",
    img: "./profile.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
