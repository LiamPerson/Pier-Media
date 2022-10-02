const sqlite = require("sqlite3");
const fs = require("fs");

class Database {

    /**
     * Node SQLite3 Database instance.
     * @type {sqlite3.Database}
     */
    static instance = null;
    static DATABASE_LOCATION = __dirname + "/main.sqlite3";
    static SCHEMAS_LOCATION = __dirname + "/schemas/";

    static init() {
        console.log("DB LOC", this.DATABASE_LOCATION);
        Database.instance = new sqlite.Database(Database.DATABASE_LOCATION, err => {
            console.error("Something went wrong initialising SQLite Database", err);
        });

        // Get all schema files
        const files = fs.readdirSync(Database.SCHEMAS_LOCATION);
        const jsonFileDatums = files.map(fileName => require(Database.SCHEMAS_LOCATION + fileName));
        console.log("JSON FILES", jsonFileDatums);
        const creationSQL = Database._constructTableSQL(jsonFileDatums[0])
        console.log("Table create sql", creationSQL);
        console.log("Table sql type", typeof creationSQL);

        // Initialise tables ...
        try {
            Database.instance.run(creationSQL);
        } catch (err) {
            console.error("Error while initialising test table:", err);
        }
    }

    /**
     * Constructs a `CREATE TABLE` SQLite query from a JSON file.
     * @param {Object} JSON JSON File
     * @returns {String} SQLite construction string.
     */
    static _constructTableSQL(JSON) {
        const columnsString = Object.keys(JSON.columns).map(columnName => {
            const type = JSON.columns[columnName].type ? JSON.columns[columnName].type.toUpperCase() : "TEXT";
            const addPrimary = JSON.columns[columnName].primary ? " PRIMARY KEY" : "";
            return `${columnName} ${type}${addPrimary}`;
        });
        return `CREATE TABLE ${JSON.name}(${columnsString.join()})`;
    }
}

module.exports = Database;