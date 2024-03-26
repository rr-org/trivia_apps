import { create } from "zustand";


interface Iroom {
    room:string,
    username:string
  }

const initialState:Iroom = {
    room:"",
    username:""
}

interface IRoommStore {
    room: Iroom,
    setRoom: ( room: string ) => void;
    setUsername: ( username: string ) => void;
}

const useStoreRoom = create<IRoommStore>((set)=> ({
    room:initialState,
    setRoom: ( room: string ) => set((state) => ({ room: ({ ...state.room, room})})),
    setUsername: ( username: string ) => set((state)=> ({ room: ({...state.room, username})}))
}))

export default useStoreRoom;