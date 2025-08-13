import styles from './splash.module.css'

import { BarLoader } from 'react-spinners'

import { Brand } from '../../engine/wrap'

const Splash = () => {
	return (
		<main className={styles.splash}>
			<Brand />
			<BarLoader />
		</main>
	)
}

export default Splash
