import styles from './dropmenu.module.css'

import Link from 'next/link'

import { PlainGlyph } from '../../glyphs'

import React, { useState } from 'react'

type DropMenuProps = {
	menu: {
		name: string
		href: string
	}[]
	style?: React.CSSProperties
	setDropPanelOn: React.Dispatch<React.SetStateAction<boolean>>
	isDropPanelOn: boolean
}

const DropMenu = ({
	menu,
	style,
	setDropPanelOn,
	isDropPanelOn,
}: DropMenuProps) => {
	const [activeMenu, setActiveMenu] = useState<string | null>(null)

	const MenuHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setActiveMenu(e.currentTarget.textContent)
		setDropPanelOn(!isDropPanelOn)
	}

	return (
		<ul style={style} className={styles.dropmenu}>
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
	)
}

export default DropMenu
