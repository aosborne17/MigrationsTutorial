const { userService } = require("../../services/user");

class UserController {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      console.log(req.body);

      const user = await userService.createUser(name, email, password);

      console.log(user);

      console.log("user created");

      res.send(user);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAllUsers(req, res) {
    try {
      console.log(req.query);
      const { name, page } = req.query;

      const users = await userService.getAllUsers(name);

      console.log(users);

      console.log("users retrieved");

      res.send(users);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = {
  userController: new UserController(),
};
