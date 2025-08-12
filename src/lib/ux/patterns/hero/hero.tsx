import React from 'react'
import styles from './hero.module.css'

type HeroProps = {
	children?: React.ReactElement
}

const Hero = ({ children }: HeroProps) => {
	return <div className={styles.hero}>{children}</div>
}

export default Hero
