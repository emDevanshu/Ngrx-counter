import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CounterComponent} from "./counter/counter.component";
import {CommonModule} from "@angular/common";
import {provideState} from "@ngrx/store";
import {counterReducer} from "./state/counter.reducer";

const routes : Routes = [
  {
    path: '', component: CounterComponent,
    providers: [
      provideState('counter', counterReducer) // ✅ for standalone lazy loading
    ]
  },
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CounterModule {

 }
