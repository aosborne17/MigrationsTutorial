const { BatchDAO } = require("../dao/batch");

class BatchService {
  async canAllocate(orderLine, batch) {
    let batchQuantity = batch.quantity;
    let batchAllocations = await BatchDAO.getOrderAllocations(
      batch.id,
      orderLine.id
    );

    let purchasedQuantity = 0;

    for (let i = 0; i < batchAllocations.length; i++) {
      let orderLine;
    }

    // batch allocations contains the id of my order line  and the id of my batch

    // if they want to allocate more to the batch

    // i should loop through the batch allocations and get all with ref of the batch

    // then for all of these data, loop throug the data and get the quantity of each order-line

    // this will be the purchased quantity

    // now

    // let purchasedQuantity = batchAllocations.length;
    console.log(purchasedQuantity, "purchased quantity");
    let availableQuantity = batchQuantity - purchasedQuantity;
    console.log(availableQuantity, "available quantity");
    return (
      orderLine.sku === batch.sku && availableQuantity >= orderLine.quantity
    );
  }

  async allocate(orderLine) {
    // sort batches by most recent ETA,
    let batches = await BatchDAO.getAllBatchesByMostRecent();
    // console.log(batches, "batches");
    let batchesDates = batches.map((batch) => batch.eta);
    console.log(batchesDates);
    // loop through batches
    for (let i = 0; i < batches.length; i++) {
      let batch = batches[i];
      console.log(typeof batch.eta);
      console.log(batch.eta);
      // if batch can allocate line, allocate line to batch and return batchRef
      if (await this.canAllocate(orderLine, batch)) {
        await BatchDAO.addBatchAllocation(batch.id, orderLine.id);
        return {
          batchRef: batch.reference,
        };
      }
    }
    throw new Error(
      // else throw error out of stock for the sku
      `Out of stock for ${orderLine.sku} and ${orderLine.sku} and none currently in transportation`
    );
  }
}

module.exports = {
  BatchService: new BatchService(),
};
