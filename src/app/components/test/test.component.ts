import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {filter, Observable, Subject, Subscription, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test/test.selectors";
import {TestState} from "../../models/test-state";
import {DynamicFormTestComponent} from "./dynamic-form-test/dynamic-form-test.component";
import {NavigationStart, Router} from "@angular/router";
import {clearStateAction} from "../../store/test/actions/clear-state.actions";
import {InputTemplateCheckboxComponent} from "../shared/inputs/input-template-checkbox/input-template-checkbox.component";
import {SideBarTestComponent} from "./side-bar-test/side-bar-test.component";
import {TestApiActions} from "../../store/test/actions/test.actions";
import {CountdownService} from "../../services/countdown.service";

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
    InputTemplateCheckboxComponent,
    SideBarTestComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, OnDestroy{
  public windowWidth: number = window.innerWidth;
  private destroy$ = new Subject<void>();
  private form: any;
  private countdownSubscription: Subscription = new Subscription();
  timerValue: string = '00:00:00';
  test$: Observable<TestState> = new Observable();


  constructor(
    private store: Store,
    private router: Router,
    private countdownService: CountdownService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  onFormChange(formValue: any) {
    this.form = formValue;
  }

  onSubmitTestEvent() {
    this.submitForm();
  }

  submitForm(){
    console.log('submitForm: ', this.form);
    this.store.dispatch(TestApiActions.postTest(this.form));
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

    this.countdownService.startCountdown(10);
    this.countdownSubscription = this.countdownService.timerValue$.subscribe(value => {
      this.timerValue = value;
    });

    const countdownEndSubscription = this.countdownService.countdownEnd$.subscribe(() => {
      this.submitForm();
    });

    this.destroy$.subscribe(() => {
      countdownEndSubscription.unsubscribe();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
