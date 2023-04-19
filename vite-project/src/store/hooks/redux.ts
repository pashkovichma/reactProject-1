import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatchType, AppStateType } from '../index';

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
