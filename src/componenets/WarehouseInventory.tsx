import React from 'react';

// Define props with TypeScript
interface WarehouseInventoryProps {
  itemCount: number;
  truckCount: number;

}

const WarehouseInventory: React.FC<WarehouseInventoryProps> = ({ itemCount, truckCount }) => {
  return (
    <div className="warehouse-inventory">
      <h2>Warehouse Inventory</h2>
      <p>Items in Warehouse: {itemCount}</p>
      <p>Truck Left: {truckCount}</p>
    </div>
  );
};

export default WarehouseInventory;
