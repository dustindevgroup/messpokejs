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

	login : function( username, password, provider, callback ) {
		Pokeio.init(username, password, location, provider, callback);
	},

	setLocation : function ( location, callback ) {
		location.altitude = location.altitude ? location.altitude : 1;
		this._state.location = location;
		console.log('PokeBO.getLocation = ', this._state.location);

		Pokeio.SetLocation(location, function (err, coordinates) {
			if ( err ) {
				callback( err );
				return;
			}

			callback(null, coordinates);
		});
	},

	getLocation : function () {
		console.log('PokeBO.getLocation = ', this._state.location);
		return this._state.location;
	}

};

module.exports = PokeBO;
