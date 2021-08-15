const db = require("../models");

class BatchDAO {
  async getAllBatchesByMostRecent() {
    return await db.Batch.findAll({
      // where: {
      //   id: [46128, 2865, 49569, 1488, 45600, 61991, 1418, 61919, 53326, 61680],
      // },
      // Add order conditions here....
      order: [["eta"]],
    });
  }

  async addBatchAllocation(batchId, orderLineId) {
    return await db.BatchAllocation.create({
      orderLineId,
      batchId,
    });
  }

  async getOrderAllocations(batchId, orderLineId) {
    console.log(batchId, orderLineId);
    return await db.BatchAllocation.findAll({
      where: {
        batchId: batchId,
        orderLineId: orderLineId,
      },
    });
  }
}

module.exports = {
  BatchDAO: new BatchDAO(),
};
