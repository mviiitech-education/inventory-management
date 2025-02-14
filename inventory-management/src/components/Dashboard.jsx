function Dashboard() {
  const inventoryStats = {
    totalItems: 150,
    lowStock: 12,
    outOfStock: 3,
    categories: 8,
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Items</h3>
          <p>{inventoryStats.totalItems}</p>
        </div>
        <div className="stat-card">
          <h3>Low Stock Items</h3>
          <p>{inventoryStats.lowStock}</p>
        </div>
        <div className="stat-card">
          <h3>Out of Stock</h3>
          <p>{inventoryStats.outOfStock}</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <p>{inventoryStats.categories}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
