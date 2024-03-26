import { create } from "zustand";


interface ITime {
    time: number,
    index: number
}

const initialState:ITime = {
    time:0,
    index: 0
}

interface IStore {
    data:ITime,
    setTime:( time: number ) => void;
    setIndex:( index: number ) => void;
}

const useTime = create<IStore>((set)=> ({
    data:initialState,
    setTime:( time: number ) => set((state) => ({ data: ({ ...state.data, time })})),
    setIndex:( index: number ) => set((state) => ({ data: ({ ...state.data, index })}))
}))

export default useTime;

