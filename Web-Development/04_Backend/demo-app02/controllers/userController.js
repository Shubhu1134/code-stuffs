const db = require("../db");

exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM `user`", (err, results) => {
    if (err) {
      console.error("❌ Error fetching users:", err);
      return res.status(500).json({ error: "Server error" });
    }
    res.json(results);
  });
};
