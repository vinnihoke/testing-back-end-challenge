module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './database/testing-back-end.db3',
		},
		pool: {
			afterCreate: (connection, done) => {
				connection.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: "./database/migrations",
		},
		seeds: {
			directory: './database/seeds'
		}
	}
}