import React from 'react'

import styles from './pen.module.css'

type PenProps = {
	children: string
	color?: string
	style?: React.CSSProperties
	success?: boolean
	warn?: boolean
	err?: boolean
	bold?: boolean
	idiom?: boolean
	ink?: boolean | string
}

const Pen = ({
	children,
	style,
	err,
	success,
	warn,
	bold,
	idiom,
	ink,
}: PenProps) => {
	const createPen = React.createElement(
		`${(bold && 'b') || (idiom && 'i') || 'p'}`,
		{
			style: (style && style) || (ink && { color: ink }),
			className:
				(err && styles.err) ||
				(success && styles.success) ||
				(warn && styles.warn),
		},
		children
	)
	return createPen
}

export default Pen
