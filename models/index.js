const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner')

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
		type: Sequelize.STRING
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
const Hotel = db.define("hotel", {
  name: Sequelize.STRING,
  num_stars: {
    type: Sequelize.INTEGER,
    validate: { min: 1, max: 5 }
  },
  amenities: Sequelize.STRING
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);



module.exports = {
	Activity: Activity,
	Restaurant: Restaurant,
	Place: Place,
	Hotel: Hotel,
	db: db
}