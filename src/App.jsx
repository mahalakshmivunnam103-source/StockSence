function App() {
  return (
    <div style={styles.app}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>StockSences</h2>

        <nav>
          <div style={styles.activeMenu}>📊 Dashboard</div>
          <div style={styles.menu}>📦 Products</div>
          <div style={styles.menu}>🚚 Operations</div>
          <div style={styles.menu}>🏢 Warehouse</div>
          <div style={styles.menu}>👤 Profile</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1>Inventory Dashboard</h1>
            <p>Welcome to StockSences Inventory Management System</p>
          </div>

          <button style={styles.profileButton}>My Profile</button>
        </header>

        {/* KPI Cards */}
        <section style={styles.cards}>
          <div style={styles.card}>
            <span style={styles.icon}>📦</span>
            <p>Total Products in Stock</p>
            <h2>1,250</h2>
          </div>

          <div style={styles.card}>
            <span style={styles.icon}>⚠️</span>
            <p>Low / Out of Stock</p>
            <h2>24</h2>
          </div>

          <div style={styles.card}>
            <span style={styles.icon}>📥</span>
            <p>Pending Receipts</p>
            <h2>18</h2>
          </div>

          <div style={styles.card}>
            <span style={styles.icon}>📤</span>
            <p>Pending Deliveries</p>
            <h2>12</h2>
          </div>

          <div style={styles.card}>
            <span style={styles.icon}>🔄</span>
            <p>Internal Transfers</p>
            <h2>7</h2>
          </div>
        </section>

        {/* Filters */}
        <section style={styles.filterBox}>
          <h2>Inventory Overview</h2>

          <div style={styles.filters}>
            <select style={styles.select}>
              <option>Document Type</option>
              <option>Receipts</option>
              <option>Delivery Orders</option>
              <option>Internal Transfers</option>
              <option>Inventory Adjustments</option>
            </select>

            <select style={styles.select}>
              <option>Status</option>
              <option>Draft</option>
              <option>Waiting</option>
              <option>Ready</option>
              <option>Done</option>
              <option>Canceled</option>
            </select>

            <select style={styles.select}>
              <option>Warehouse</option>
              <option>Main Warehouse</option>
              <option>Production Floor</option>
            </select>

            <select style={styles.select}>
              <option>Product Category</option>
              <option>Raw Materials</option>
              <option>Finished Goods</option>
            </select>
          </div>
        </section>

        {/* Recent Operations */}
        <section style={styles.tableBox}>
          <h2>Recent Operations</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Receipt</td>
                <td>Steel Rods</td>
                <td>50</td>
                <td><span style={styles.done}>Done</span></td>
              </tr>

              <tr>
                <td>Delivery</td>
                <td>Office Chairs</td>
                <td>10</td>
                <td><span style={styles.waiting}>Waiting</span></td>
              </tr>

              <tr>
                <td>Internal Transfer</td>
                <td>Steel Rods</td>
                <td>30</td>
                <td><span style={styles.ready}>Ready</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fb",
    color: "#1f2937",
  },

  sidebar: {
    width: "240px",
    background: "#111827",
    color: "white",
    padding: "25px 15px",
  },

  logo: {
    textAlign: "center",
    marginBottom: "40px",
  },

  menu: {
    padding: "14px",
    marginBottom: "8px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  activeMenu: {
    padding: "14px",
    marginBottom: "8px",
    borderRadius: "8px",
    background: "#2563eb",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: "30px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  profileButton: {
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "18px",
    marginBottom: "30px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  icon: {
    fontSize: "28px",
  },

  filterBox: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  filters: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
  },

  select: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
  },

  tableBox: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },

  done: {
    color: "green",
    fontWeight: "bold",
  },

  waiting: {
    color: "orange",
    fontWeight: "bold",
  },

  ready: {
    color: "blue",
    fontWeight: "bold",
  },
};

export default App;