//THIS IS THE OLD WAY TO CRETE OBJECTS USING CONSTRUCTOR FUNCTION BEFORE THE "CLASS" SYNTAX CAME ABOUT

function User(username, email) {
  this.username = username;
  this.email = email;
  //adding method inside the constructor. NOT GOOD PRACTICE
  //   this.login = function () {
  //     console.log(`${this.username} has logged in`);
  //   };
}

//the best thing to do when creating objects is attach the methods to the __proto__ property
//PROTOTYPE property. every object in JS hasa __proto__ object that contains all the methods for that object can access

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

///////PROTOTYPAL INHERITANCE MODEL////
function Admin(username, email, title) {
  //calling the User constructor and adding a new property only for Admin
  User.call(this, username, email);
  this.title = title;
}

///adding the _proto_ properties from User to  Admin
Admin.prototype = Object.create(User.prototype);

//adding new method in  __proto_ only fro Admin
Admin.prototype.deleteUser = function (user) {
  //delete a user
  users = users.filter((u) => {
    return u.username !== user.username;
  });
};

const user1 = new User("Marina", "marina@gmail");
const user2 = new User("Cecilia", "cecilia@gmail");
const user3 = new Admin("Jesper", "jesper@gmail.com", "black-belt-ninja");

let users = [user1, user2, user3];
console.log(users);
user1.login().logout();
user3.deleteUser(user2);
console.log(users);

//Everything inherits from Object
