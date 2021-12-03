//CLASS is like a blueprint for an Object(it describes how it should be made)
//DEFINE CLASS AND CREATE ITS CONSTRUCTOR FUNCTION
class User {
  //constructor function to attaching properties to the instance
  constructor(username, email) {
    //set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  //attaching methods to the User Object (instance)
  login() {
    console.log(`${this.username} just logged in`);
    //if we wanna chain methods if an instance together, then we need to "return this" otherwise if we don't wanna chain methods together then we can retur another value like calculation osv
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

// the new keyword
//1 - it creates a new empty Object
//2- it binds the value of "this" to the new empty Object
//3- it calls the constructor function to build the object

//CLASS INHERITANCE OR SUBCLASSES
class Admin extends User {
  constructor(name, email, title) {
    //SUPER() looks for the parents class and it looks in side that for a constructor
    super(name, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

//here we are creating a INSTANCE of the User class
const user1 = new User("Maria", "maria@gmai.com");
const user2 = new User("Jesper", "jesper@gmail.com");

//creating a INSTANCE of the Admin Class which inherit the User class
const user3 = new Admin(
  "Marlene",
  "marlene.valle@gmail.com",
  "black-belt-ninja"
);

console.log(user1, user2, user3);

user1.login().incScore().incScore().logout();

let users = [user1, user2, user3];
console.log(users);

user3.deleteUser(user2);
console.log(users);
console.log(user3);
