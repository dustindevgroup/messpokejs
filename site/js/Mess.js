var Mess = {

	askLoginGoogle : function () {
		var user = prompt('user');
		var pass = prompt('password');

		Mess.Requests.loginGoogle( user, pass, function () {
			console.log( 'loginGoogle ', arguments );
		});

	}

};
