var Pokeio = require('pokemon-go-node-api');

// PokeBO
var PokeBO = {
	_state : {
		location : {
			type : 'coords',
			coords : {
				latitude : 0,
				longitude : 0,
				altitude : 1
			}
		}
	},

	login : function( username, password, provider, location, callback ) {
		this._state.location.coords = location;
		Pokeio.init(username, password, this._state.location, provider, callback);
	},

	setLocation : function ( location, callback ) {
		location.altitude = location.altitude ? location.altitude : 1;
		this._state.location.coords = location;

		console.log('PokeBO.getLocation = ', this._state.location);

		Pokeio.SetLocation(location, callback);
	},

	getLocation : function () {
		console.log('PokeBO.getLocation = ', this._state.location);
		return this._state.location;
	},

	getProfile : function (callback) {
		Pokeio.GetProfile(callback);
	}

};

module.exports = PokeBO;
