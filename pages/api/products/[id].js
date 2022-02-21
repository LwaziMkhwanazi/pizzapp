import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  dbConnect();

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const pizza = await Product.findById(id);
      res.status(200).json(pizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.findByIdAndUpdate(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
