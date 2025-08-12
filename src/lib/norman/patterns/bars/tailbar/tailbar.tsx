import styles from './tailbar.module.css'

type TailbarProps = {
	copyright?: string
}

const TailBar = ({ copyright }: TailbarProps) => {
	return (
		<div className={styles.tailbar}>
			<p>{copyright}</p>
		</div>
	)
}

export default TailBar
