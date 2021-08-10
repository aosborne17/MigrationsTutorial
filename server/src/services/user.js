const { userDao } = require("../dao/user");

class UserService {
  createUser(name, email, password) {
    return userDao.createOne(name, email, password);
  }

  getAllUsers(name) {
    return userDao.getAll(name);
  }
}

module.exports = {
  userService: new UserService(),
};
