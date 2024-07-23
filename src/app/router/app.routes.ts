import { Routes } from '@angular/router';
import {MainComponent} from "../components/main/main.component";
import {TestComponent} from "../components/test/test.component";
import {authGuard} from "./guards/auth.guard";
import {CreateTestComponent} from "../components/create-test/create-test.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'test/:public_key',
    component: TestComponent,
    canActivate: [authGuard]
  },
  {
    path: 'create-test',
    component: CreateTestComponent,
  }
];
