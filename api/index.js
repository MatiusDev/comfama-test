const express = require('express');
const cors = require('cors');

const app = express();

// Routes
const animeRouter = require('./routes/Anime/index');

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('../app/build'));

const PORT = process.env.PORT || 3005;

app.use('/api/anime', animeRouter);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});