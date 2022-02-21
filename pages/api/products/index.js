import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  dbConnect();

  const { method } = req;

  if (method === "GET") {
      try {
          const pizza = await Product.find({})
            res.status(200).json(pizza)
      } catch (error) {
          res.status(500).json(error)
      }
  }


  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
