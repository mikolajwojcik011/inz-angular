import {GetTestApiResponse} from "./get-test-api-response";
import {Question} from "./question";
import {IdQuestion} from "./question-id";

export interface TestState {
    question_arr: Question[];
    id_question_arr: IdQuestion[];
}
