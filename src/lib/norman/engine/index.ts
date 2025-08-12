import { Chalk, Pen } from './writer'
import { Button } from './trigger'

import { Head, Tail, Wrap } from './layer'

const Writer = {
	Chalk: Chalk,
	Pen: Pen,
}

const Trigger = {
	Button: Button,
}

const Layer = {
	Head: Head,
	Tail: Tail,
	Wrap: Wrap,
}

export { Writer, Trigger, Layer }
