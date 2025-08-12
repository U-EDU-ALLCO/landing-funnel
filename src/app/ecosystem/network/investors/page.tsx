import Link from 'next/link'

const Investors = () => {
	return (
		<div>
			<Link href={'/angel'}>Angel Investors</Link>
			<Link href={'/vc'}>Venture Capitals</Link>
			<Link href={'/vc'}>Community</Link>
		</div>
	)
}

export default Investors
