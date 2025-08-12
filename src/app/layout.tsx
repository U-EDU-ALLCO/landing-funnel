import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

import GlobalSettings from '../config/settings/global.settings.json'

import { Layer } from '@/lib/norman/engine'

import {
	HeadBar,
	TailBar,
	InfoBar,
	ToggleBar,
	ShortcutBar,
} from '@/lib/norman/patterns/bars'

const prime = Plus_Jakarta_Sans({
	variable: '--writer-prime',
	subsets: ['latin'],
	weight: '500',
})

const sec = Plus_Jakarta_Sans({
	variable: '--writer-aux',
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
	const Head = (
		<>
			{/* <ShortcutBar /> */}
			{/* <CtxBar /> */}
			<HeadBar />
			{/* <StatusBar /> */}
		</>
	)
	const Tail = (
		<>
			<ShortcutBar />
			<TailBar copyright="© 2025 iG5 Foundation | All Rights Reserved" />
			<ToggleBar />
			<InfoBar content="Copyright © All Rights Reserved | The Madras Wallstreet Growth Consulting ® TMWGC | Incorporated as Dewallstreet Private Limited" />
		</>
	)

	return (
		<html lang="en">
			<body className={`${prime.variable} ${sec.variable}`}>
				<Layer.Head>{Head}</Layer.Head>
				<Layer.Wrap>{children}</Layer.Wrap>
				<Layer.Tail>{Tail}</Layer.Tail>
			</body>
		</html>
	)
}
