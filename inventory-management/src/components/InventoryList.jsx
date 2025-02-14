import { useState } from "react";

function InventoryList() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Electronics",
      quantity: 50,
      price: 99.99,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Clothing",
      quantity: 100,
      price: 29.99,
    },
    { id: 3, name: "Product 3", category: "Books", quantity: 75, price: 14.99 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="inventory-list">
      <h2>Inventory List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;
