import React from 'react'
import styles from './chalk.module.css'

type ChalkProps = {
	children: string
	mass: number
	color?: string
	style?: React.CSSProperties
	success?: boolean
	warn?: boolean
	err?: boolean
}

const Chalk = ({ children, mass, style, err, success, warn }: ChalkProps) => {
	const createMarker = React.createElement(
		`h${mass ? mass : 5}`,
		{
			style: style && style,
			className:
				(err && styles.err) ||
				(success && styles.success) ||
				(warn && styles.warn),
		},
		children
	)
	return createMarker
}

export default Chalk
