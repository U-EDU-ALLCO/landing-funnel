import React from 'react'
import styles from './button.module.css'

import { BeatLoader } from 'react-spinners'

type ButtonProps = {
	children: string
	color?: string
	style?: React.CSSProperties
	success?: boolean
	warn?: boolean
	err?: boolean
	prime?: boolean
	aux?: boolean
	glyph?: boolean
	unfill?: boolean
	loads?: boolean
	onPress?: () => void
	onLoadLabel?: string
}

const Button = ({
	children,
	style,
	err,
	success,
	warn,
	prime,
	aux,
	unfill,
	loads,
	onPress,
	onLoadLabel,
}: ButtonProps) => {
	const createButton = React.createElement(
		`${'button'}`,
		{
			onClick: onPress,
			style:
				(style && style) ||
				(prime && { backgroundColor: 'blue', color: 'white' }) ||
				(aux && { backgroundColor: 'black', color: 'white' }) ||
				(!aux &&
					!prime &&
					unfill && { backgroundColor: 'none', color: 'black' }),
			className:
				(err && styles.err) ||
				(success && styles.success) ||
				(warn && styles.warn),
		},
		<>
			{loads && <BeatLoader />}
			{(loads && onLoadLabel) || children}
		</>
	)
	return createButton
}

export default Button
