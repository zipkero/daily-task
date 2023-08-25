import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store.ts";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTaskSelector = () => useAppSelector((state) => state.tasks);
export const useTaskDispatch = () => useDispatch<AppDispatch>();
