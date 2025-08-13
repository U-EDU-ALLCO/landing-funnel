import Hero from '@/lib/norman/patterns/hero/hero'
import { Writer } from '@/lib/norman/engine'

import API from '@/config'

const Home = () => {
	const { hero_contents } = API.CONTENTS
	return (
		<main>
			{
				<Hero>
					<Writer.Chalk mass={1}>{hero_contents.core}</Writer.Chalk>
					<Writer.Pen>{hero_contents.brief}</Writer.Pen>
				</Hero>
			}
		</main>
	)
}
export default Home
