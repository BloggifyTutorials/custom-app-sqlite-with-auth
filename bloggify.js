const sqlite3 = require("sqlite3")

module.exports = {
    "title": "Sqlite Custom Application with Authentication",
    "description": "A template for an application using Sqlite with user authentication.",
    "domain": "bloggify.org",
    "db_options": {
        "autosync": true,
        "underscored": true
    },
    "plugins": [
        "ajs-components"
    ],
    "core_plugins": [
        ["user-auth", {
            "passport": {
                "fresh_user": true
            }
        }]
    ],
    "server": {
        "session": {
            storeOptions: {
                driver: sqlite3.Database,
                ttl: 1000 * 60 * 60
            }
        }
    }
}
