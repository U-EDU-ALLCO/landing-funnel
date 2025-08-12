import Image from 'next/image'
import styles from './plainglyph.module.css'

type PlainGlyphProps = {
	src: string
	w: number
	h: number
	alt: string
	style?: React.CSSProperties
}

const PlainGlyph = ({ src, w, h, alt, style }: PlainGlyphProps) => {
	return (
		<Image
			className={styles.plainglyph}
			style={style}
			alt={alt}
			width={w}
			height={h}
			src={src}
		/>
	)
}
export default PlainGlyph
