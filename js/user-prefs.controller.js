'use strict'

const STORAGE_KEY = 'user_pref'

const onInit = () => {
	_getFromStorage()
}

const _getFromStorage = () => {
	const prefs = loadFromStorage(STORAGE_KEY)
	if (prefs === undefined) return

	document.querySelector('#first-name').value = prefs.firstName
	document.querySelector('#bg-color').value = prefs.bgColor
	document.querySelector('#txt-color').value = prefs.txtColor
	document.querySelector('#zoom-factor').value = prefs.zoomFactor
	document.querySelector('#map-start-location').value = prefs.mapStartLocation
}

const onSavePref = ev => {
	ev.preventDefault()

	_saveToStorage({
		firstName: document.querySelector('#first-name').value,
		bgColor: document.querySelector('#bg-color').value,
		txtColor: document.querySelector('#txt-color').value,
		zoomFactor: document.querySelector('#zoom-factor').value,
		mapStartLocation: document.querySelector('#map-start-location').value,
	})

	onShowDialog(true)
}

const onShowDialog = isShow => {
	const dialog = document.querySelector('dialog')
	isShow ? dialog.showModal() : dialog.close()
}

const onGoBack = () => {
	location.assign('index.html')
}

const _saveToStorage = value => {
	saveToStorage(STORAGE_KEY, value)
}
