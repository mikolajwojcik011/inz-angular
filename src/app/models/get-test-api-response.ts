import {Question} from './question';
import {IdQuestion} from "./question-id";


export interface GetTestApiResponse{
  'question-arr': Question[];
  'question-id-arr': IdQuestion[];
}
