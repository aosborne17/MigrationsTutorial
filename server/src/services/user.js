import UserDAO from "../dao/user";

class UserService {
  createUser(name, email, password) {
    return UserDAO.createOne(name, email, password);
  }

  getAllUsers(name) {
    return UserDAO.getAll(name);
  }
}

export default new UserService();
