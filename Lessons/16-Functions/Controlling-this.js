const user = {
  name: "sara",
  greet(prefix) {
    console.log(prefix + " " + this.name);
  }
};

const sayhello = user.greet;
sayhello.call(user, "Hello");

sayhello.apply(user, ["hi"]);

const boundGreet = sayhello.bind(user);
boundGreet("Welcome");
boundGreet("hello");