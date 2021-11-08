import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

// old
// export function useSelectorTyped<T>(fn: (state: RootState) => T): T {
//   return useSelector(fn)
// }
