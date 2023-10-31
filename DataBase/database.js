const sqlite3 = require('sqlite3')

function getConnection(dbFilePath) {
    return new Promise((resolve, reject) => {
        let connection = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READONLY, (err) => {
            if (err) {
                reject(JSON.stringify(err))
            } else {
                resolve(connection)
            }
        })
    })
}

function executeQueryGet(connection,query, params) {
    return new Promise((resolve, reject) => {
        connection.all(query, params, (err, result) => {
            if (err) {
                reject(JSON.stringify(err))
            } else {
                console.log(result)
                resolve(result)
            }
        })
    })
}
module.exports = {
    executeQueryGet,
    getConnection
}