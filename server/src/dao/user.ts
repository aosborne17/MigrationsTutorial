import db from "../models";

class UserDAO {
  async createOne(name, email, password) {
    return await db.User.create({
      name,
      email,
      password,
    });
  }

  async getAll(name) {
    if (name) return await db.User.findAll({ where: { name } });

    return await db.User.findAll({});
  }
}

export default new UserDAO();
