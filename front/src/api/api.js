import axios from "axios"

const URL_BASE = 'http://localhost:3000/api'

export const getAspirantes = async () => {
    return await axios.get(`${URL_BASE}/aspirantes`)
}

export const getProfesiones = async () => {
    return await axios.get(`${URL_BASE}/profesiones`)
}