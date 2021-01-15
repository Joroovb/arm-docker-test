class CatRepository {
	constructor(DAO) {
		this.DAO = DAO;
	}

	createTable() {
		const sql = `
        CREATE TABLE IF NOT EXISTS data(ID INTEGER PRIMARY KEY AUTOINCREMENT, CAT STRING NOT NULL, WEIGHT REAL NOT NULL, DATUM STRING NOT NULL)`;
		return this.DAO.run(sql);
	}

	create(name, weight, datum) {
		return this.DAO.run(
			'INSERT INTO data (CAT, WEIGHT, DATUM) VALUES (?, ?, ?)',
			[name, weight, datum]
		);
	}

	getByName(name) {
		return this.DAO.get(`SELECT * FROM data WHERE CAT = ?`, [name]);
	}

	getAllByName(name) {
		return this.DAO.all(`SELECT * FROM data WHERE CAT = ?`, [name]);
	}

	getAll() {
		return this.DAO.all(`SELECT * FROM data`);
	}
}

module.exports = CatRepository;
