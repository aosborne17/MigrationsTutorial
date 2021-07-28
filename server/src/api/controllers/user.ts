import { Request, Response } from "express";
import UserService from "../../services/user";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      console.log(req.body);

      const user = await UserService.createUser(name, email, password);

      console.log(user);

      console.log("user created");

      res.send(user);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      console.log(req.query);
      const { name, page } = req.query;

      const users = await UserService.getAllUsers(name);

      console.log(users);

      console.log("users retrieved");

      res.send(users);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new UserController();
