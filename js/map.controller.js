function getPosition() {
	if (!navigator.geolocation) {
		alert('HTML5 Geolocation is not supported in your browser')
		return
	}

	// One shot position getting or continues watch
	navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
	// navigator.geolocation.watchPosition(showLocation, handleLocationError)
}
function handleLocationError(error) {
	var locationError = document.getElementById('locationError')

	switch (error.code) {
		case 0:
			locationError.innerHTML = 'There was an error while retrieving your location: ' + error.message
			break
		case 1:
			locationError.innerHTML = "The user didn't allow this page to retrieve a location."
			break
		case 2:
			locationError.innerHTML = 'The browser was unable to determine your location: ' + error.message
			break
		case 3:
			locationError.innerHTML = 'The browser timed out before retrieving the location.'
			break
	}
}

function showLocation(position) {
	console.log(position)
	const { latitude: lat, longitude: lng } = position.coords
	// document.getElementById("latitude").innerHTML = lat
	// document.getElementById("longitude").innerHTML = lng
	// document.getElementById("accuracy").innerHTML = accuracy

	// var date = new Date(position.timestamp)
	// document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
	initMap(lat, lng)
}

function initMap(lat = 45, lng = 19) {
	// if (!lat) lat = 31
	// if (!lng) lng = 31
	const elMap = document.querySelector('.map')
	const options = {
		center: { lat, lng },
		zoom: 16,
	}

	const map = new google.maps.Map(elMap, options)

	const marker = new google.maps.Marker({
		position: { lat, lng },
		map,
		title: 'Hello World!',
	})
}
