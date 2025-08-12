import styles from './infobar.module.css'

type InfobarProps = { content: string }

const InfoBar = ({ content }: InfobarProps) => {
	return (
		<div className={styles.infobar}>
			<p>{content}</p>
		</div>
	)
}

export default InfoBar
