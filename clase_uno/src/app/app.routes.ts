import { ComponentOneComponent } from './components/component-one/component-one.component';
import { Routes } from '@angular/router';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path: "test", component:ComponentOneComponent},
    {path:"test-two", component:ComponentTwoComponent},
    {path:"*", redirectTo:""}
];
