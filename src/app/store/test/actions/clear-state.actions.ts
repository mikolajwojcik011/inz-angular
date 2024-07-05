import {createActionGroup, emptyProps} from "@ngrx/store";

export const clearStateAction = createActionGroup({
  source: 'Clear State',
  events: {
    'Clear State': emptyProps()
  }
});
