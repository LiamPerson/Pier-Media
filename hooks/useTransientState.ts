import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export type setTransientStateFunctionType<T> = Dispatch<SetStateAction<T>>

/**
 * Acts like useState but whenever overridingValue is updated, the state value will be overridden.
 */
function useTransientState<T>(
	initialValue: T,
	overridingValue: T,
	{ onOverride }: { onOverride?: (overridingValue: T) => void } = {}
): [T, setTransientStateFunctionType<T>] {
	const [value, setValue] = useState(initialValue)
	const [lastOverride, setLastOverride] = useState(overridingValue)
	useEffect(() => {
		if (lastOverride !== overridingValue) {
			setValue(overridingValue)
			onOverride?.(overridingValue)
			setLastOverride(overridingValue)
		}
	}, [lastOverride, onOverride, overridingValue])
	return [value, setValue]
}

export default useTransientState
