import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {getCounter} from "../state/counter.selector";
import {AppState} from "../../state/app.state";

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit{
  counter$!: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
