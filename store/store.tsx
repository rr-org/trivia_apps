import { create } from "zustand";


interface Iuser {
    id: any,
    username: string | null | undefined,
    email: string | undefined,
    avatar:string,
    diamond:number
}

const initialState:Iuser = {
    id: 0,
    username: "",
    email: "",
    avatar:"",
    diamond:0
}

interface IuserStore {
    user: Iuser,
    setUsername: ( username: string ) => void;
    setEmail: ( email: string ) => void;
    setAvatar: ( avatar: string ) => void;
    setDiamond: ( diamond: number) => void;
    setMinDiamond: ( diamond: number ) => void | undefined;
}

const useStoreUser = create<IuserStore>((set) => ({
    user: initialState,
    setEmail: ( email : string | undefined ) => set((state) => ({ user: { ...state.user, email}})),
    setUsername: ( username : string | null | undefined ) => set((state) => ({ user: { ...state.user, username}})),
    setAvatar: ( avatar : string ) => set((state) => ({ user: { ...state.user, avatar}})),
    setDiamond: ( diamond : number ) => set((state) => ({ user: { ...state.user, diamond}})),
    setMinDiamond: ( diamond : number ) => set((state) => ({ user: { ...state.user, diamond: state.user.diamond - diamond}}))
}))

export default useStoreUser;