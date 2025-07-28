import {createFeature, createFeatureSelector, createSelector} from "@ngrx/store";
import {CounterState} from "./counter.state";
import {state} from "@angular/animations";
import {CounterComponent} from "../counter/counter.component";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getName = createSelector(getCounterState, (state) => {
  return state.name;
});
