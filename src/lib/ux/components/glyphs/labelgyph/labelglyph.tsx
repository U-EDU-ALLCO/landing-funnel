import Image from 'next/image'
import styles from './labelglyph.module.css'

type LabelGlyphProps = {
	src: string
	w: number
	h: number
	alt: string
	label: string
}

const LabelGlyph = ({ src, w, h, alt, label }: LabelGlyphProps) => {
	return (
		<span className={styles.labelglyph}>
			<Image alt={alt} width={w} height={h} src={src} />
			<a>{label}</a>
		</span>
	)
}
export default LabelGlyph
