import { on, addClass, removeClass } from 'lib/dom'
import { throttle } from 'lib/utils'

const OFFSET = 200
const VISIBLE_CLASS = 'is-visible'

export default el => {
	const update = () => {
		if (getScrollTop() > OFFSET) {
			addClass(VISIBLE_CLASS, el)
		} else {
			removeClass(VISIBLE_CLASS, el)
		}
	}

	on('click', e => {
		e.preventDefault()

		window.scrollTo(0, 0)
	}, el)

	on('load', throttle(update, 300), window)
}
