import express from 'express'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  return res.json({ message: 'ALO' })
})




app.listen(port, () => console.log(`Servidor online -- [http://localhost:${port}] `))