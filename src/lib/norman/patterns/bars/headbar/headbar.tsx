'use client'

import styles from './headbar.module.css'
import { LabelGlyph } from '@/lib/norman/atoms/glyphs'
import { BrandMark } from '@/lib/norman/atoms/marks'
import { DropMenu } from '@/lib/norman/atoms/menus'
import { Trigger } from '@/lib/norman/engine'
import { HeadbarSettings } from '@/config/settings'
import { useState } from 'react'

import { DropPanel } from '../../panels'

import { SlickBar } from '@/lib/norman/patterns/bars'

const HeadBar = () => {
	const [isDropPanelOn, setDropPanelOn] = useState<boolean>(false)

	return (
		<div className={styles.head}>
			<div className={styles.headbar}>
				<BrandMark />
				<DropMenu
					isDropPanelOn={isDropPanelOn}
					setDropPanelOn={setDropPanelOn}
					menu={HeadbarSettings.menu}
				/>
				<div className={styles.ctrls}>
					<Trigger.Button aux>Partner</Trigger.Button>
					<LabelGlyph {...HeadbarSettings.labelGlyph} />
				</div>
			</div>
			<SlickBar
				isDropPanelOn={isDropPanelOn}
				setDropPanelOn={setDropPanelOn}
			/>
			{isDropPanelOn && <DropPanel />}
		</div>
	)
}

export default HeadBar
