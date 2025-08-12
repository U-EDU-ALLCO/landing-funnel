import Image from 'next/image'
import styles from './brandmark.module.css'
import Link from 'next/link'

const BrandMark = () => {
	return (
		<Link className={styles.brandmark} href={'/'}>
			<Image
				className={styles.logo}
				alt="brand"
				width={190}
				height={0}
				src={'/u-edu-brand.svg'}
			/>
		</Link>
	)
}

export default BrandMark
