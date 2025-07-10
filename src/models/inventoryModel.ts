import db from '../db';

export async function getAllInventory() {
  const result = await db.query('SELECT * FROM inventory ORDER BY id');
  return result.rows;
}

export async function addInventoryItem(product_name: string, quantity: number, location: string) {
  const result = await db.query(
    'INSERT INTO inventory (product_name, quantity, location) VALUES ($1, $2, $3) RETURNING *',
    [product_name, quantity, location]
  );
  return result.rows[0];
}

export async function updateInventoryItem(
  id: number,
  product_name: string,
  quantity: number,
  location: string
) {
  const result = await db.query(
    'UPDATE inventory SET product_name = $1, quantity = $2, location = $3 WHERE id = $4 RETURNING *',
    [product_name, quantity, location, id]
  );
  return result.rows[0];
}

export async function deleteInventoryItem(id: number) {
  const result = await db.query('DELETE FROM inventory WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}

