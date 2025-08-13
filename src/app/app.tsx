'use client'
import React, { useEffect, useState } from 'react'
import { Layer } from '@/lib/norman/engine'
import {
	HeadBar,
	TailBar,
	InfoBar,
	ToggleBar,
	ShortcutBar,
} from '@/lib/norman/patterns/bars'
import { usePathname } from 'next/navigation'

import Splash from '@/lib/norman/templates/splash'

type AppProps = {
	children: React.ReactNode
}

const App = ({ children }: AppProps) => {
	const [splash_on, show_splash] = useState<boolean>(true)

	const path = usePathname()

	useEffect(() => {
		const timerId = setTimeout(() => {
			show_splash(!splash_on)
		}, 2000)

		return () => {
			clearTimeout(timerId)
		}
	}, [])

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

	const Layers = (
		<React.Fragment>
			<Layer.Head>{Head}</Layer.Head>
			<Layer.Wrap>{children}</Layer.Wrap>
			<Layer.Tail>{Tail}</Layer.Tail>
		</React.Fragment>
	)

	return splash_on && path === '/' ? <Splash /> : Layers
}

export default App
