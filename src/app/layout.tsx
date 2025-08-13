import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

import GlobalSettings from '../config/settings/global.settings.json'

import App from './app'

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
	return (
		<html lang="en">
			<body className={`${prime.variable} ${sec.variable}`}>
				<App>{children}</App>
			</body>
		</html>
	)
}
