import {Answer} from "./answer";

export interface Question{
  id: string
  head: string;
  index_style: number;
  answers: Answer[];
}
