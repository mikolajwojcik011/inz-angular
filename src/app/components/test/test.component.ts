import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectTest} from "../../store/test.selectors";
import {GetTestApiResponse} from "../../models/get-test-api-response";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  test: GetTestApiResponse | null = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  privateKey = this.route.snapshot.params['public_key'];

  ngOnInit() {
    this.store.select(selectTest).subscribe(test => {
      this.test = test;
      console.log(this.test);
    });
  }
}
