import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestService} from "./store/test.services";
import {TestApiActions} from "./store/test.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inz-na-angular';
}
