import { Chalk, Pen } from './writer'
import { Button } from './trigger'

import { Head, Tail, Wrap as WRP } from './layer'

import Brand from './wrap/brand'

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
	Wrap: WRP,
}

const Wrap = {
	Brand: Brand,
}

export { Writer, Trigger, Layer, Wrap }
