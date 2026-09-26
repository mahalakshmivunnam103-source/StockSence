import { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Steel Rods",
      sku: "ST-001",
      category: "Raw Materials",
      warehouse: "Main Warehouse",
      quantity: 50,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Office Chairs",
      sku: "CH-001",
      category: "Finished Goods",
      warehouse: "Main Warehouse",
      quantity: 10,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Wooden Tables",
      sku: "TB-001",
      category: "Finished Goods",
      warehouse: "Production Floor",
      quantity: 35,
      status: "In Stock",
    },
    {
      id: 4,
      name: "Copper Wire",
      sku: "CW-001",
      category: "Raw Materials",
      warehouse: "Main Warehouse",
      quantity: 5,
      status: "Low Stock",
    },
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `New Product ${products.length + 1}`,
      sku: `PR-${String(products.length + 1).padStart(3, "0")}`,
      category: "Finished Goods",
      warehouse: "Main Warehouse",
      quantity: 20,
      status: "In Stock",
    };

    setProducts([...products, newProduct]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.app}>

      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>StockSences</h2>

        <nav>
          <button
            style={page === "dashboard" ? styles.activeMenu : styles.menu}
            onClick={() => setPage("dashboard")}
          >
            📊 Dashboard
          </button>

          <button
            style={page === "products" ? styles.activeMenu : styles.menu}
            onClick={() => setPage("products")}
          >
            📦 Products
          </button>

          <button
            style={page === "operations" ? styles.activeMenu : styles.menu}
            onClick={() => setPage("operations")}
          >
            🚚 Operations
          </button>

          <button
            style={page === "warehouse" ? styles.activeMenu : styles.menu}
            onClick={() => setPage("warehouse")}
          >
            🏢 Warehouse
          </button>

          <button
            style={page === "profile" ? styles.activeMenu : styles.menu}
            onClick={() => setPage("profile")}
          >
            👤 Profile
          </button>
        </nav>
      </aside>

      {/* MAIN */}
      <main style={styles.main}>

        {/* HEADER */}
        <header style={styles.header}>
          <div>
            <h1>
              {page === "dashboard" && "Inventory Dashboard"}
              {page === "products" && "Products"}
              {page === "operations" && "Operations"}
              {page === "warehouse" && "Warehouse"}
              {page === "profile" && "My Profile"}
            </h1>

            <p>StockSences Inventory Management System</p>
          </div>

          <button
            style={styles.profileButton}
            onClick={() => setPage("profile")}
          >
            My Profile
          </button>
        </header>

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <>
            <section style={styles.cards}>

              <div style={styles.card}>
                <span style={styles.icon}>📦</span>
                <p>Total Products in Stock</p>
                <h2>{products.length}</h2>
              </div>

              <div style={styles.card}>
                <span style={styles.icon}>⚠️</span>
                <p>Low / Out of Stock</p>
                <h2>
                  {
                    products.filter(
                      (product) => product.status === "Low Stock"
                    ).length
                  }
                </h2>
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
                    <td style={styles.done}>Done</td>
                  </tr>

                  <tr>
                    <td>Delivery</td>
                    <td>Office Chairs</td>
                    <td>10</td>
                    <td style={styles.waiting}>Waiting</td>
                  </tr>

                  <tr>
                    <td>Internal Transfer</td>
                    <td>Steel Rods</td>
                    <td>30</td>
                    <td style={styles.ready}>Ready</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </>
        )}

        {/* PRODUCTS */}
        {page === "products" && (
          <section style={styles.tableBox}>

            <div style={styles.productHeader}>
              <h2>Product Management</h2>

              <button
                style={styles.addButton}
                onClick={addProduct}
              >
                + Add Product
              </button>
            </div>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.search}
            />

            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Warehouse</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>{product.category}</td>
                    <td>{product.warehouse}</td>
                    <td>{product.quantity}</td>
                    <td
                      style={
                        product.status === "Low Stock"
                          ? styles.waiting
                          : styles.done
                      }
                    >
                      {product.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </section>
        )}

        {/* OPERATIONS */}
        {page === "operations" && (
          <section style={styles.operationGrid}>

            <div
              style={styles.operationCard}
              onClick={() => alert("Receipts module selected")}
            >
              📥
              <h2>Receipts</h2>
              <p>Manage incoming stock</p>
            </div>

            <div
              style={styles.operationCard}
              onClick={() => alert("Delivery Orders module selected")}
            >
              📤
              <h2>Delivery Orders</h2>
              <p>Manage outgoing stock</p>
            </div>

            <div
              style={styles.operationCard}
              onClick={() => alert("Internal Transfers module selected")}
            >
              🔄
              <h2>Internal Transfers</h2>
              <p>Move stock between locations</p>
            </div>

            <div
              style={styles.operationCard}
              onClick={() => alert("Inventory Adjustments module selected")}
            >
              ⚙️
              <h2>Inventory Adjustments</h2>
              <p>Adjust inventory quantities</p>
            </div>

          </section>
        )}

        {/* WAREHOUSE */}
        {page === "warehouse" && (
          <section style={styles.cards}>

            <div style={styles.card}>
              <span style={styles.icon}>🏢</span>
              <h2>Main Warehouse</h2>
              <p>Products: 850</p>
            </div>

            <div style={styles.card}>
              <span style={styles.icon}>🏭</span>
              <h2>Production Floor</h2>
              <p>Products: 400</p>
            </div>

          </section>
        )}

        {/* PROFILE */}
        {page === "profile" && (
          <section style={styles.profileCard}>

            <h2>User Profile</h2>

            <p><strong>Name:</strong> StockSences User</p>
            <p><strong>Role:</strong> Inventory Manager</p>
            <p><strong>Email:</strong> user@stocksences.com</p>

            <button
              style={styles.addButton}
              onClick={() => alert("Profile editing coming soon")}
            >
              Edit Profile
            </button>

          </section>
        )}

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
    display: "block",
    width: "100%",
    padding: "14px",
    marginBottom: "8px",
    borderRadius: "8px",
    border: "none",
    background: "transparent",
    color: "white",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "15px",
  },

  activeMenu: {
    display: "block",
    width: "100%",
    padding: "14px",
    marginBottom: "8px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "white",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "15px",
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

  tableCell: {
    padding: "12px",
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

  productHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addButton: {
    padding: "11px 18px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  },

  search: {
    width: "100%",
    padding: "12px",
    margin: "20px 0",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    boxSizing: "border-box",
  },

  operationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  operationCard: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    fontSize: "30px",
  },

  profileCard: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
};

export default App;