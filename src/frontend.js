'use strict'

import './scss/frontend.scss'

import init from 'lib/init-components'

document.addEventListener('DOMContentLoaded', () => {
	init({
		component: 'components'
	}).mount()
})
