import { Request, Response } from 'express';
import { getAllInventory, addInventoryItem, updateInventoryItem, deleteInventoryItem } from '../models/inventoryModel';

export async function getInventory(req: Request, res: Response) {
  try {
    const inventory = await getAllInventory();
    res.json(inventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching inventory' });
  }
}

export async function createInventory(req: Request, res: Response) {
  try {
    const { product_name, quantity, location } = req.body;
    const newItem = await addInventoryItem(product_name, quantity, location);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding inventory item' });
  }
}

export async function updateInventory(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const { product_name, quantity, location } = req.body;
    const updated = await updateInventoryItem(id, product_name, quantity, location);
    if (!updated) return res.status(404).json({ message: 'Item not found' });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating item' });
  }
}

export async function deleteInventory(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const deleted = await deleteInventoryItem(id);
    if (!deleted) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting item' });
  }
}