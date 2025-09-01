const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "../data/media.json")

// Carrega dados do JSON
function loadData() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]))
    }
    return JSON.parse(fs.readFileSync(filePath))
}

// Salva no JSON
function saveData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

module.exports = { loadData, saveData }