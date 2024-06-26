import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {TestService} from "../../store/test.services";
import {Store} from "@ngrx/store";
import {TestApiActions} from "../../store/test.actions";
import {joinTestFormValidator} from "../../validators/join-test-form.validator";
import {ButtonBlueComponent} from "../shared/button-blue/button-blue.component";
import {NgIf} from "@angular/common";

interface Form {
  public_key: AbstractControl;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonBlueComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  constructor(
    private getTestService: TestService,
    private store: Store,
  ) {}

  form!: FormGroup<Form>;
  submitted = false;

  ngOnInit() {
    this.form = new FormGroup<Form>({
      public_key: new FormControl<string>('', [Validators.required, joinTestFormValidator()]),
    });
  }

  submitForm(){
    this.submitted = true;
    if (this.form.valid) {
      console.log('sent')
      this.getTestService
        .getTest(this.form.value.public_key)
        .subscribe(response => {
          this.store.dispatch(TestApiActions.fetchTestSchema({test: response}));
        }
      );
    }
  }

}
