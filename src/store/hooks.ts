import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { StoreType } from './store'

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
