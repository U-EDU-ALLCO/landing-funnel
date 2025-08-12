import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

import GlobalSettings from '../config/settings/global.settings.json'

import {
	HeadBar,
	TailBar,
	SlickBar,
	CtxBar,
	InfoBar,
	ToggleBar,
	ShortcutBar,
	ShoutBar,
	StatusBar,
} from '@/lib/ux/patterns/bars'

const prime = Plus_Jakarta_Sans({
	variable: '--font-prime',
	subsets: ['latin'],
	weight: '500',
})

const sec = Plus_Jakarta_Sans({
	variable: '--font-sec',
	subsets: ['latin'],
	weight: '500',
})

export const metadata: Metadata = {
	title: GlobalSettings.title,
	description: GlobalSettings.description,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${prime.variable} ${sec.variable}`}>
				{/* <ShortcutBar />
				<CtxBar /> */}
				<HeadBar />
				<SlickBar />
				{/* <StatusBar /> */}
				{children}
				<ShortcutBar />
				<TailBar copyright="© 2025 iG5 Foundation | All Rights Reserved" />
				<ToggleBar />
				<InfoBar content="Copyright © All Rights Reserved | The Madras Wallstreet Growth Consulting ® TMWGC | Incorporated as Dewallstreet Private Limited" />
			</body>
		</html>
	)
}
