import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Subject, takeUntil} from "rxjs";
import {TestService} from "../../store/test.services";
import {TestApiActions} from "../../store/test.actions";
import {joinTestFormValidator} from "../../validators/join-test-form.validator";
import {ButtonBlueComponent} from "../shared/button-blue/button-blue.component";
import {FormMain} from "../../models/main-form";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonBlueComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy{

  private destroy$ = new Subject<void>();

  constructor(
    private getTestService: TestService,
    private store: Store,
    private router: Router,
  ) {}

  form!: FormGroup<FormMain>;
  submitted = false;

  getInputClass() {
    return (this.form.get('public_key')?.invalid && (this.form.get('public_key')?.touched || this.submitted)) ? 'rounded-b-none' : 'rounded-b-lg';
  }

  submitForm(){
    this.submitted = true;
    if (this.form.valid) {
      this.getTestService
        .getTest(this.form.value.public_key)
        .pipe(takeUntil(this.destroy$))
        .subscribe(response => {
          this.store.dispatch(TestApiActions.fetchTestSchema({ publicKey: this.form.value.public_key }));
          this.router.navigate(['/test', this.form.value.public_key]);
        }
      );
    }
  }

  ngOnInit() {
    this.form = new FormGroup<FormMain>({
      public_key: new FormControl<string>('', [Validators.required, joinTestFormValidator()]),
    });
  }

  ngOnDestroy() {
    this.form.reset();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
