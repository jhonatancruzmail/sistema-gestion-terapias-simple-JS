const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const users = [
  { username: '12345', password: '12345' }
];

const SECRET_KEY = process.env.JWT_SECRETE_KEY;
console.log(SECRET_KEY);

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard', currentRoute: req.path });
});

app.get('/pacientes', (req, res) => {
  res.render('pacientes', { title: 'Pacientes', currentRoute: req.path });
});

app.get('/calendario', (req, res) => {
  res.render('calendario', { title: 'Calendario', currentRoute: req.path });
});

app.get('/informes', (req, res) => {
  res.render('informes', { title: 'Informes', currentRoute: req.path });
});


const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
