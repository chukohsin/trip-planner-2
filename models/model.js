const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {
	logging: false
})

const Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age_range: {
		type: Sequelize.STRING,
		allowNull: false
	}
})


const Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	},
	price: {
		type: Sequelize.INTEGER,
		validate: {
			max: 5,
			min: 1
		}
	}
	
})

const Place = db.define('place', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
})
const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  numStars: {
    type: Sequelize.FLOAT,
    validate: {
			max: 5,
			min: 1
		}
  },
  amenities: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);



module.exports = {
	db: db,
}