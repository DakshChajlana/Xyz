import { ADDTODOD ,  DELETETODO, EDITING, EDITTODO } from "../constants/constants";
import { initialState } from "../state/initialState";

export const reducerfn = (state= initialState , action )=>{
    switch (action.type){
        case ADDTODOD: return {
            ...state,
            todos:[...state.todos,action.payload]
        }
            case DELETETODO :{
                let newTodos= [...state.todos]
                    newTodos.splice(action.payload,1)
                    return{
                        ...state,
                        todos:newTodos
                    }

               }

                case EDITTODO:return {
                        ...state,
                        editIndex:action.payload
                    }

                    case EDITING : {
                        let newTodos = [...state.todos]
                        newTodos.splice(state.editIndex , 1 ,action.payload ) 
                    
                    return {
                        ...state,
                        todos: newTodos ,
                        editIndex: null
                    };
                }
                default : return state ;
    }
}