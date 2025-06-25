# 📘 Day 8 – Advanced Database Operations

In this module, you'll learn how to write advanced MySQL queries using joins, pagination, filtering, and sorting in your backend using Express.js.

---

## 🧱 Create Related Tables

### 📊 Example: Users and Posts

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(255),
  content TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 🔗 1. JOIN Query (Get users with their posts)

### 📁 Controller (`controllers/userController.js`)

```js
exports.getUsersWithPosts = (req, res) => {
  const sql = `
    SELECT users.id AS userId, users.name, users.email,
           posts.id AS postId, posts.title, posts.content
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
```

### 📁 Route (`routes/userRoutes.js`)

```js
router.get("/with-posts", getUsersWithPosts);
```

---

## 📄 2. Pagination (Page-wise data)

### ⚙️ Controller Logic

```js
exports.getUsersPaginated = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  const sql = "SELECT * FROM users LIMIT ? OFFSET ?";

  db.query(sql, [limit, offset], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ page, limit, users: result });
  });
};
```

### ✅ Route

```js
router.get("/paginate", getUsersPaginated);
```

### 📌 URL Example:

`http://localhost:7000/users/paginate?page=2&limit=3`

---

## 🧹 3. Filtering Users by Keyword

```js
exports.searchUsers = (req, res) => {
  const keyword = `%${req.query.q}%`;
  const sql = "SELECT * FROM users WHERE name LIKE ? OR email LIKE ?";

  db.query(sql, [keyword, keyword], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
```

```js
router.get("/search", searchUsers);
```

### 🔍 URL:

`http://localhost:7000/users/search?q=shubham`

---

## 🧾 4. Sorting

```js
exports.sortUsers = (req, res) => {
  const sortBy = req.query.sort || "id";
  const order = req.query.order === "desc" ? "DESC" : "ASC";
  const sql = `SELECT * FROM users ORDER BY ${sortBy} ${order}`;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
```

```js
router.get("/sort", sortUsers);
```

### 🔃 Example:

`http://localhost:7000/users/sort?sort=name&order=desc`

---

## ✅ Summary

You now know how to:

- Use SQL joins to relate tables
- Apply pagination with limit and offset
- Implement search filtering with LIKE
- Sort using query parameters

---

## 🚀 Next: File Uploads with `multer`

Let me know once you're ready to push this or move on to Day 9!
