const sqlite = require("better-sqlite3");
const fs = require("fs");

class Database {

    /**
     * Node SQLite3 Database instance.
     * @type {sqlite.Database}
     */
    static instance = null;
    static DATABASE_LOCATION = __dirname + "/main.sqlite3";
    static SCHEMAS_LOCATION = __dirname + "/schemas/";

    /**
     * Gets all results matching the query.
     * @param {String} query
     * @param {Array} [binds] optional binds for the query.
     * @example Database.get(`SELECT * FROM users WHERE id = ?`, ["221"]); // returns { id: "221", name: "Client1" }
     */
    static get(query, binds = []) {
        const stmt = Database.instance.prepare(query);
        return stmt.get(binds);
    }

    static async init() {
        Database.instance = new sqlite(Database.DATABASE_LOCATION, { verbose: console.log });
        console.log("Database instance", Database.instance);
        console.log("ASDNADNSKD", Database.get(`SELECT * FROM sqlite_master WHERE type = ?`, ['table']));

        // Get all schema files
        const files = fs.readdirSync(Database.SCHEMAS_LOCATION);
        const jsonFileDatums = files.map(fileName => require(Database.SCHEMAS_LOCATION + fileName));
        // console.log("JSON Datums", jsonFileDatums);
        const creationSQL = Database._constructTableSQL(jsonFileDatums[0])

        // Initialise tables ...
        // Create non-existing tables
        // let existingTables = {};
        // await Database.instance.each(`SELECT * FROM sqlite_master WHERE type='table'`, (err, row) => {
        //     if(err) throw err;
        //     console.log("Row", row);
        //     const tableName = row.name;
        //     existingTables[tableName] = row;
        // });

        // console.log("Existing tables", existingTables);

        // for(const jsonSchema of jsonFileDatums) {
        //     console.log("SCHEMA", jsonSchema);
        //     const tableName = jsonSchema.name;
        // }


        // try {
        //     Database.instance.run(creationSQL);
        // } catch (err) {
        //     console.error("Error while initialising test table:", err);
        // }
    }

    /**
     * Constructs a `CREATE TABLE` SQLite query from a JSON file.
     * @param {Object} JSON JSON File
     * @returns {String} SQLite construction string.
     */
    static _constructTableSQL(JSON) {
        const columnsString = Object.keys(JSON.columns).map(columnName => {
            const type = JSON.columns[columnName].type ? JSON.columns[columnName].type.toUpperCase() : "TEXT";
            const addPrimary = (columnName === JSON.primary) ? " PRIMARY KEY" : "";
            return `${columnName} ${type}${addPrimary}`;
        });
        return `CREATE TABLE ${JSON.name}(${columnsString.join()})`;
    }
}

module.exports = Database;