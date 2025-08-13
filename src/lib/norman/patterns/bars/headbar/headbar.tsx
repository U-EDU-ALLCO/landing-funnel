'use client'

import styles from './headbar.module.css'
import { LabelGlyph } from '@/lib/norman/atoms/glyphs'
import { DropMenu } from '@/lib/norman/atoms/menus'
import { Trigger } from '@/lib/norman/engine'
import { HeadbarSettings } from '@/config/settings'
import { useState } from 'react'

import { DropPanel } from '../../panels'

import { SlickBar } from '@/lib/norman/patterns/bars'

import { Wrap } from '@/lib/norman/engine'

const HeadBar = () => {
	const [isDropPanelOn, setDropPanelOn] = useState<boolean>(false)
	const [loads, setLoads] = useState<boolean>(false)

	const PartnerPressHandler = () => {
		setLoads(!loads)
	}

	return (
		<div className={styles.head}>
			<div className={styles.headbar}>
				<Wrap.Brand />
				<DropMenu
					isDropPanelOn={isDropPanelOn}
					setDropPanelOn={setDropPanelOn}
					menu={HeadbarSettings.menu}
				/>
				<div className={styles.ctrls}>
					<Trigger.Button
						loads={loads}
						onLoadLabel="Processing"
						onPress={PartnerPressHandler}
						unfill>
						Partner
					</Trigger.Button>
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
