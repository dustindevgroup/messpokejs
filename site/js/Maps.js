Mess.Maps = {
	_map : null,

	initMap : function () {
		this._map = new google.maps.Map( document.getElementById('divMap'), {
			center: {lat: -34.397, lng: 150.644},
			scrollwheel: true,
			zoom: 17
		});
	}
};
