"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import Category from "../database/models/category.model"

//create new category 
export const createCategory = async ({ categoryName }:CreateCategoryParams ) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name:categoryName});

    return JSON.parse(JSON.stringify(newCategory));

  }catch(error) {
    handleError(error)
  }

}

//fetch all categories from database
export const getAllCategorise = async () => {
  try {
    await connectToDatabase();

    const categorise = await Category.find();

    return JSON.parse(JSON.stringify(categorise));

  }catch(error) {
    handleError(error)
  }

}