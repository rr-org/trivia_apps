import { create } from "zustand";

interface IQuiz {

        _id:string,
        question: string,
        option:string[],
        answer:string

}

const initialState:IQuiz = {
    _id:"",
    question: "",
    option:[],
    answer:""
}

interface IStore {
    quiz: IQuiz | null,
    setQuiz:( quiz : IQuiz ) => void;
}

const useQuizStore = create<IStore>((set)=> ({
    quiz: null,
    setQuiz: (quiz) => set({quiz})
}))

export default useQuizStore;