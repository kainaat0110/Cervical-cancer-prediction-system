const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors'); 
connectToMongo();

const app = express() // express ka object
const port = 5000 // Konsa port use karegi voh express kyu use krte h? To connect backend to frontend ok
// Express se Api banate hai ham log aur phir usko frontend meh access karte hai wo fetch wala?
//ha ok

app.use(cors());
app.use(express.json())
//                            yeh file kaha hai voh batayega kaunsi?  dekh routes ke andar auth hai na ha
app.use('/api/auth',require('./routes/auth'))
//       {Dekh yeh kya api rahega voh decide karega okkk} toh voh file meh api banate haiok


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})