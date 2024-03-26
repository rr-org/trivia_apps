import { create } from "zustand";


interface Iuser {
    id: any,
    username: string | null | undefined,
    email: string | undefined,
    avatar:string | undefined,
    diamond:number
}

const initialState:Iuser = {
    id: "",
    username: "",
    email: "",
    avatar:"",
    diamond:0
}

interface IuserStore {
    user: Iuser,
    setId: ( id: string ) => void;
    setUsername: ( username: string | null ) => void;
    setEmail: ( email: string ) => void;
    setAvatar: ( avatar: string | undefined) => void;
    setDiamond: ( diamond: number) => void;
    setMinDiamond: ( diamond: number ) => void | undefined;
}

const useStoreUser = create<IuserStore>((set) => ({
    user: initialState,
    setId: ( id: string ) => set((state) => ({ user: { ...state.user, id}})),
    setEmail: ( email : string | undefined ) => set((state) => ({ user: { ...state.user, email}})),
    setUsername: ( username : string | null | undefined ) => set((state) => ({ user: { ...state.user, username}})),
    setAvatar: ( avatar : string | undefined) => set((state) => ({ user: { ...state.user, avatar: avatar ?? state.user.avatar}})),
    setDiamond: ( diamond : number ) => set((state) => ({ user: { ...state.user, diamond}})),
    setMinDiamond: ( diamond : number ) => set((state) => ({ user: { ...state.user, diamond: state.user.diamond - diamond}}))
}))

export default useStoreUser;