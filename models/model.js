const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/stuff', {
	logging: false
})


const Stuff = db.define('itinerary', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lat: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	lng: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	coord: {
		type: Sequelize.VIRTUAL,
		get () {
			return [ this.getDataValue('lng'), this.getDataValue('lat')];
		}
	}
	
})

Stuff.create({
	name: 'Bouley',
	lat: 40.741017,
	lng: -73.991763
}).then((bouley) => {
	console.log(bouley);
}).catch(new Error("NOOOO"))






module.exports = {
	db: db,
	Stuff: Stuff
}