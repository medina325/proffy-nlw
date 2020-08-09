const dataBase = require("sqlite-async") // require é o import do python ou include do C

// IMPORTANTE
// Como o JS é o doido (assíncrono) e pode executar instruções posteriores antes de acabar o método(?) open, vamos ter que usar o método(?) then.
// Isso significa que será necessário esperar a execução de open, e só depois disso será executada a função passada como argumento para then.
// Mais um detalhe importante, é que a dataBase.open será passada automaticamente como argumento para a função que then recebe, no caso, a função execute

function execute(db) 
{
    //console.log("Oin, este é o conteúdo da variável dataBase")
    //console.log(db) // db = dataBase.open(_dirname + "/database.sqlite")
    
    // Criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT, 
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

// Objeto module.exports irá receber o retorno da função execute (que é o db)
// E o Node.js sabe que quando outro arquivo fizer o require desse arquivo, i.e., require("db"), ele saberá que deverá pegar esse objeto module.exports
module.exports = dataBase.open(__dirname + "/database.sqlite").then(execute)
