import React from 'react'
import styles from './button.module.css'

type ButtonProps = {
	children: string
	color?: string
	style?: React.CSSProperties
	success?: boolean
	warn?: boolean
	err?: boolean
	prime?: boolean
	aux?: boolean
}

const Button = ({
	children,
	style,
	err,
	success,
	warn,
	prime,
	aux,
}: ButtonProps) => {
	const createButton = React.createElement(
		`${'button'}`,
		{
			style:
				(style && style) ||
				(prime && { backgroundColor: 'blue', color: 'white' }) ||
				(aux && { backgroundColor: 'black', color: 'white' }),
			className:
				(err && styles.err) ||
				(success && styles.success) ||
				(warn && styles.warn),
		},
		children
	)
	return createButton
}

export default Button
