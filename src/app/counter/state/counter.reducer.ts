import {createReducer, on} from "@ngrx/store";
import {changeName, customIncrement, decrement, increment, reset} from "./counter.actions";
import {initialState} from "./counter.state";
import {state} from "@angular/animations";


const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter+1
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter-1
    }
  }),
  on(reset, (state)=> {
    return {
      ...state,
      counter: 0
    }
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.value
    }
  }),
  on(changeName, state => {
    return {
      ...state,
       name: "Modifiend Devanshu"
    }
  })
  )

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
