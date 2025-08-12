type HookTriggerProps = {
	label: string
}

const HookTrigger = ({ label }: HookTriggerProps) => {
	return <button className="hooktrigger">{label}</button>
}

export default HookTrigger
