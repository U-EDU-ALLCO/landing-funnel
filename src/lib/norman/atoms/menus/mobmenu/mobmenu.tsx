import styles from './mobmenu.module.css'

import Link from 'next/link'

import { PlainGlyph } from '../../glyphs'

import { Fragment } from 'react'

import { useState } from 'react'

type MobMenuProps = {
	menu: {
		name: string
		href: string
	}[]
	style?: React.CSSProperties
	setDropPanelOn: React.Dispatch<React.SetStateAction<boolean>>
	isDropPanelOn: boolean
}

const MobMenu = ({
	menu,
	style,
	isDropPanelOn,
	setDropPanelOn,
}: MobMenuProps) => {
	const [activeMenu, setActiveMenu] = useState<string | null>(null)

	const MenuHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setActiveMenu(e.currentTarget.textContent)
		setDropPanelOn(!isDropPanelOn)
	}

	return (
		<Fragment>
			<ul style={style} className={styles.mobmenu}>
				{menu.map((anchor, i) => (
					<Link
						style={{
							display: 'flex',
							alignItems: 'center',
							cursor: 'pointer',
						}}
						onClick={MenuHandler}
						key={i}
						href={anchor.href}>
						{anchor.name}
						<PlainGlyph
							style={{
								marginLeft: '4px',
								cursor: 'pointer',
							}}
							src={
								isDropPanelOn && activeMenu === anchor.name
									? '/glyphs/chevron-up-dark.svg'
									: '/glyphs/chevron-down-dark.svg'
							}
							w={16}
							h={16}
							alt="drop-icon"
						/>
					</Link>
				))}
			</ul>
		</Fragment>
	)
}

export default MobMenu
