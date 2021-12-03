// object literals

let user = {
  name: "Jesper",
  age: 33,
  email: "jesper@outlook.com",
  location: "Malmö",
  blogs: ["MFF fans", "How to study from home"],
  login() {
    //method is a function define in an object
    console.log("The user logged in");
  },
  logout() {
    console.log("the user logout");
  },
  logBlogs() {
    // console.log(this.blogs);
    console.log("This user has written the fallowing blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};
///'THIS' KEYWORD IS A CONTEXT OBJECT
user.logBlogs();

console.log(user);
user.login();
user.logout();

//Access the properties using brackets notation
console.log(user["email"]);
user["name"] = "Magnus";
console.log(user["name"]);

//Access the properties using dot notation
user.age = 30;
console.log(user.name);
console.log(user.age);

//type of

console.log(typeof user);

//calling a method of the object

const name = "mario";

name.toUpperCase();
