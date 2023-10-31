database = require('../../../DataBase/database')
let connection;
let sqlitePath= "E:/darsi/term 7/rayanesh/cloud_project/DataBase/UsersDB.db"
// let sqlitePath = "C:/Users/User/OneDrive/Desktop/cloud_project/cloud_project/Services/CentralServive/DataBase/UsersDb.db"

async function checkAccess(token) {
    try {
        let userInfo = token.split("_");
        connection = await database.getConnection(sqlitePath)
        let query = `select * from "Users" where "username"='${userInfo[0]}' AND "NID"=${userInfo[1]} AND "id"= '${userInfo[2]}';`
        let result = await database.executeQueryGet(connection, query, [])
        if(result == ""){
            throw "authentication failed!"
        }
    } catch (err) {
        throw err
    }

}

module.exports={
    checkAccess
}