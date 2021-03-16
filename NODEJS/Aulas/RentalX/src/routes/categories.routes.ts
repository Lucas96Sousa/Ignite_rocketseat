import { Router } from "express";
import Category from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  return res.status(201).json({ category });
});

export default categoriesRoutes;
