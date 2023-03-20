const User = require("../models/User");

class UserViewModel {
  constructor() {
    this.users = [];
  }

  async fetchUsers() {
    this.users = [
      new User("Gp The God", "gpthegod@example.com", "password1"),
      new User("Gp Bro", "gpbro@example.com", "password2"),
      new User("Gp", "gp@example.com", "password3"),
    ];
  }

  async addUser(name, email, password) {
    const newUser = new User(name, email, password);
    this.users.push(newUser);
  }
}

module.exports = UserViewModel;
