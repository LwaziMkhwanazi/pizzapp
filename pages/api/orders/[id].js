import dbConnect from "../../../util/mongo";
import Order from "../../../models/productOrders";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

 
  if (method === "PUT") {
    try {
      console.log("edit",req.body)
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      // console.log(order)
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
  }
};

export default handler;
