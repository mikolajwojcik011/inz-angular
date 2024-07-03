export interface SubmitTestApiPayload {
  public_key: string | null
  answer_arr: answer;
}

interface answer {
  [key: string]: string[];
}
