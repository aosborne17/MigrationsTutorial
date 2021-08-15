const { BatchService } = require("../../services/batch");

class BatchController {
  async allocate(req, res) {
    try {
      const { id, orderId, sku, quantity } = req.body;

      console.log(req.body);

      const { batchRef } = await BatchService.allocate({
        id: id,
        orderId: orderId,
        sku: sku,
        quantity: quantity,
      });

      res.send({
        batchRef: batchRef,
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = {
  BatchController: new BatchController(),
};
