let user = {
  name: "crystal",
  age: 33,
  email: "crystal@hotmail.com",
  location: "Madrid",
  blogs: [
    { title: "start a diet on monday", likes: 500 },
    { title: "travel the world in 90 days", likes: 460 },
  ],
  login() {
    console.log("User has login");
  },
  logout() {
    console.log("User has logout last time for today");
  },
  logBlogs() {
    console.log("This user has written the following blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};
user.logBlogs();
