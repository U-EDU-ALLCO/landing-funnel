import Hero from '@/lib/norman/patterns/hero/hero'
import { Writer } from '@/lib/norman/engine'

const Home = () => {
	return (
		<main>
			{
				<Hero>
					<Writer.Chalk success mass={1}>
						International Standards for Liberal & Responsible U-EDU
						Academic Centres.
					</Writer.Chalk>
					<Writer.Pen ink="orange">Hello</Writer.Pen>
				</Hero>
			}
		</main>
	)
}
export default Home
