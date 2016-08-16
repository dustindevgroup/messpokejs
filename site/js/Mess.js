var Mess = {

	_location : {
		latitude : -12.982764,
		longitude: -38.464504
	},

	askLoginGoogle : function () {
		var user = window.userConfig.username;
		var pass = window.userConfig.password;

		Mess.Requests.loginGoogle( user, pass, this._location, function () {
			console.log( 'loginGoogle ', arguments );
		});
	},

	setLocation : function ( lat, lng ) {
		this._location = {
			latitude : lat,
			longitude: lng
		};
	},

	getProfile : function () {
		Mess.Requests.getProfile(function ( err, profile) {
			console.log('getProfile = ', profile);
		});
	}

};
