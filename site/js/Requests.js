Mess.Requests = {

	_baseUrl : '/api/',

	_request : function ( url, method, dataJson, callback) {
		$.ajax({
			type: method,
			url: this._baseUrl + url,
			contentType : 'application/json',
			dataType: 'json',
			data: JSON.stringify( dataJson ),
			success: function ( response ) {
				if ( response.error ) {
					callback( response.error );
					return;
				}
				callback( null, response.data );
			},
			error : function (response) {
				callback( response );
			}
		});
	},

	testError : function () {
		this._request('error', 'POST', { test : '123' }, function (error, data) {
			console.log( 'testError error = ', error );
			console.log( 'testError data = ', data );
		});
	},

	loginGoogle : function (user, pass, location, callback) {
		this._request('login', 'POST', {
			username : user,
			password : pass,
			type : 'google',
			location : location
		}, callback );
	},

	getProfile : function (callback) {
		this._request('login', 'POST', {}, callback );
	}

};
