import React from 'react';

// Define props for DeliveryStatus
interface DeliveryStatusProps {
  isTruckLeft: boolean;
  onTruckDeparture: () => void; // Function to call when the truck leaves
  dispatchQuantity: number;
  setDispatchQuantity: (quantity: number) => void; // Function to set dispatch quantity
  warehouseItems: number; // Total items in the warehouse
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ isTruckLeft, onTruckDeparture, dispatchQuantity, setDispatchQuantity, warehouseItems }) => {
  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      <p>{isTruckLeft ? "The truck has left the warehouse." : "The truck is still in the warehouse."}</p>

      

      {!isTruckLeft && (
        <div>
          <input 
            type="number" 
            value={dispatchQuantity} 
            onChange={(e) => setDispatchQuantity(Number(e.target.value))}
            max={20} 
            min={5}
            placeholder="Enter quantity to dispatch"
          />
          <p>Available for dispatch: {Math.min(warehouseItems, 20)}</p>
          <button onClick={onTruckDeparture} disabled={dispatchQuantity <= 0 || dispatchQuantity > 20 || warehouseItems < dispatchQuantity}>
            Dispatch Truck
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryStatus;