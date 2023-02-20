import { m, useMotionValue, animate } from 'framer-motion'
import { colors } from '../components/constants'
import { CounterLarge } from '../icons/CounterLargeSVG'
import { useContext, useEffect, useRef } from 'react'
import { MechanicsContext } from '../App'
import { useAnimationControls } from 'framer-motion'
import { useGlobalStore } from '../store/global'
import { useGameplayStore } from '../store/gameplay'
import { useSelectorBoardCell } from '../redux/selectors'
import { useAppDispatch } from '../redux/store'
import { setTransitionEnd } from '../redux/battleSlice'

type MotionCounterProps = {
	index: number
}

export const MotionCounter: React.FC<MotionCounterProps> = ({ index }) => {
	const mec = useContext(MechanicsContext)
	const state = useSelectorBoardCell(index)
	const dispatch = useAppDispatch()

	const initialTop = 0
	const animateTop = mec.getYPos(Math.trunc(index / 7))
	const top = useMotionValue(state.isTransition ? '0' : animateTop)

	const isMounted = useRef(false)

	useEffect(() => {
    top.set(state.isTransition ? '0' : animateTop)
		if (state.isTransition) {
			animate(top, animateTop, {
				duration: 1,
				onComplete: () => {
					dispatch(setTransitionEnd(index))
				},
			})
		}
	}, [state.isTransition])

	if (state.state === '0') return null

	return (
		<m.div
			style={{
				position: 'absolute',
				left: mec.getXPos(index % 7),
				top: state.isTransition ? top : animateTop,
				transform: `translate(-50%, -50%)`,
				width: mec.getCounterSize(),
        height:  mec.getCounterSize()
			}}>
			<CounterLarge fillColor={state.state === "1" ? colors.pink : colors.yellow} />
		</m.div>
	)
}
