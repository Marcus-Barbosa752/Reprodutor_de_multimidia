const { v4: uuidv4 } = require('uuid')
const { loadData, saveData } = require("../models/mediaModel")

// Gerando a data e a hora para criação do post das multimidias
function getDate() {
    const FormatTime = n => n < 10 ? n = `0${n}` : String(n)
    const NewDate = new Date()

    let Hora = FormatTime(NewDate.getHours())
    let Minuto = FormatTime(NewDate.getMinutes())
    let Segundo = FormatTime(NewDate.getSeconds())
    let Dia = FormatTime(NewDate.getDate())
    let Mes = FormatTime(NewDate.getMonth() + 1)
    let Ano = NewDate.getFullYear()

    const FormatHour = `${Hora}:${Minuto}:${Segundo}`
    const FormatDate = `${Dia}/${Mes}/${Ano}`

    return {Hours: FormatHour, Dates: FormatDate}
}

// Buscar todos
function getAllMedia(req, res) {
    const data = loadData()
    res.json(data)
}

// Adicionar
function addMedia(req, res) {
    const { title, type, url } = req.body

    if (!title || !type || !url) {
        return res.status(400).json({ error: "Preencha título, tipo e URL." })
    }

    const data = loadData()

    const newMedia = {
        id: uuidv4(),
        title,
        type,
        url,
        Hora: getDate().Hours,
        Data: getDate().Dates
    }

    data.push(newMedia)
    saveData(data)
    res.status(201).json(newMedia)
}

// Remover
function deleteMedia(req, res) {
    const { id } = req.params
    let data = loadData()
    const filtered = data.filter(item => item.id != id)

    if (filtered.length === data.length) {
        return res.status(404).json({ error: "Item não encontrado!" })
    }

    saveData(filtered)
    res.json({ message: "Item removido com sucesso!" })
}

module.exports = { getAllMedia, addMedia, deleteMedia }