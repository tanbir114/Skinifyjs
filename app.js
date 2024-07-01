const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const predictionRoutes = require('./routes/predictionRoutes');
const cors = require('cors');

app.use(cors()); 

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, 'uploads')); // Adjust upload folder as needed
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) =>{ 
    res.send("Hello world!");
})

// app.get('/api/classify', (req, res) =>{
//     res.send("Hello zahid!");
// })


// Routes
app.use('/api', predictionRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
