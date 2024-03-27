const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

// routers
app.get('/', function(req, res) {
  const users = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'User 1', title: 'Developer', email: 'user1@example.com', role: 'Member' },
    { name: 'User 2', title: 'Developer', email: 'user2@example.com', role: 'Member' },
    { name: 'User 3', title: 'Developer', email: 'user3@example.com', role: 'Member' },
    { name: 'User 4', title: 'Developer', email: 'user4@example.com', role: 'Member' },
    { name: 'User 5', title: 'Developer', email: 'user5@example.com', role: 'Member' },
    { name: 'User 6', title: 'Developer', email: 'user6@example.com', role: 'Member' },
    { name: 'User 7', title: 'Developer', email: 'user7@example.com', role: 'Member' },
    { name: 'User 8', title: 'Developer', email: 'user8@example.com', role: 'Member' },
    { name: 'User 9', title: 'Developer', email: 'user9@example.com', role: 'Member' },
    { name: 'User 10', title: 'Developer', email: 'user10@example.com', role: 'Member' },
  ];
  res.render('index', { users: users });
});

// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
