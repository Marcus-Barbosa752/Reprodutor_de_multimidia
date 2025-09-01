const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

// Middlewares
app.use(express.json())
app.use(cors())

// Rotas
const mediaRoutes = require("./routes/mediaRoutes")
app.use("/api/media", mediaRoutes)

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})