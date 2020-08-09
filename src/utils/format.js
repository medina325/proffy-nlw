// LEMBRE: Objeto em js é {}

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]


// Funcionalidades
// FUNCTIONAL JAVASCRIPT (?)

function getSubject(subjectNumber) {
    // +subjectNumber para garantir que será um número
    return subjects[+subjectNumber - 1]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
