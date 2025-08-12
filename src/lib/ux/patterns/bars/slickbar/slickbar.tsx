'use client'

import styles from './slickbar.module.css'
import { MobMenu } from '@/lib/ux/components/menus'
import { SlickbarSettings } from '@/config/settings'
import { PlainGlyph } from '@/lib/ux/components/glyphs'

const SlickBar = () => {
	return (
		<div className={styles.slickbar}>
			<MobMenu menu={SlickbarSettings.menu} />
			<PlainGlyph
				src={'/glyphs/menu-dark.svg'}
				w={24}
				h={24}
				alt={'menu'}
			/>
		</div>
	)
}

export default SlickBar
