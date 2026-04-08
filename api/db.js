import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "mysql",//"host.docker.internal",
  user: "root",
  password: "Root@123",
  database: "blog_app_db",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});
