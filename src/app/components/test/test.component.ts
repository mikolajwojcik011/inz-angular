import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";
import {filter, Observable, Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test/test.selectors";
import {TestState} from "../../models/test-state";
import {DynamicFormTestComponent} from "./dynamic-form-test/dynamic-form-test.component";
import {NavigationStart, Router} from "@angular/router";
import {clearStateAction} from "../../store/test/actions/clear-state.actions";
import {InputTemplateCheckboxComponent} from "../shared/input-template-checkbox/input-template-checkbox.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    NgForOf,
    DynamicFormTestComponent,
    AsyncPipe,
    NgIf,
    InputTemplateCheckboxComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy{
  private destroy$ = new Subject<void>();
  test$: Observable<TestState> = new Observable();
  public windowWidth: number = window.innerWidth;

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
    this.test$ = this.store.select(selectTest)
      .pipe(takeUntil(this.destroy$))

    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((e) => e instanceof NavigationStart),
    )
    .subscribe(() => {
      this.store.dispatch(clearStateAction.clearState());
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
