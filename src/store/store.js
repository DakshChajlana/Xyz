import { createStore } from "redux";
import { reducerfn } from "../reducer/reducerfn";

 export const store = createStore(reducerfn)