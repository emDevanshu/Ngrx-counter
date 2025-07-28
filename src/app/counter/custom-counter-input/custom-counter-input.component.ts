import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {changeName, customIncrement} from "../state/counter.actions";
import {getName} from "../state/counter.selector";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {AppState} from "../../state/app.state";

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent implements OnInit{
  value! : number;
  name$! : Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.name$ = this.store.select(getName);
  }

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncrement({value: +this.value}));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }
}
