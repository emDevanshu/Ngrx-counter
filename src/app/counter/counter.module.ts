import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CounterComponent} from "./counter/counter.component";
import {CommonModule} from "@angular/common";

const routes : Routes = [
  {
    path: '', component: CounterComponent
  },
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CounterModule {

 }
