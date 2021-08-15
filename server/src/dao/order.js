const db = require("../models");

class OrderDAO {
  async getOrderLineById(id) {
    return await db.OrderLine.findAll({
      where: {
        id,
      },
    });
  }
}

module.exports = {
  OrderDAO: new OrderDAO(),
};
