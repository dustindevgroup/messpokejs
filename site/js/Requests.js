Mess.Requests = {

	_baseUrl : '/api/',

	_request : function ( url, method, dataJson, callback) {
		$.ajax({
			type: method,
			url: url,
			dataType: 'json',
			data: dataJson,
			success: function () {
				callback.apply(arguments);
			},
			error : function () {
				callback.apply(arguments);
			}
		});
	},

	loginGoogle : function (user, pass, callback) {
		console.log('loginGoogle baseurl = ', this._baseUrl );
		var url = this._baseUrl + 'login';
		this._request(url, 'POST', {
			username : user,
			password : pass,
			type : 'google'
		}, callback );
	}

};
