'use client'

import styles from './slickbar.module.css'
import { MobMenu } from '@/lib/norman/atoms/menus'
import { SlickbarSettings } from '@/config/settings'
import { PlainGlyph } from '@/lib/norman/atoms/glyphs'

type SlickBarProps = {
	setDropPanelOn: React.Dispatch<React.SetStateAction<boolean>>
	isDropPanelOn: boolean
}

const SlickBar = ({ isDropPanelOn, setDropPanelOn }: SlickBarProps) => {
	return (
		<div className={styles.slickbar}>
			<MobMenu
				isDropPanelOn={isDropPanelOn}
				setDropPanelOn={setDropPanelOn}
				menu={SlickbarSettings.menu}
			/>
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
