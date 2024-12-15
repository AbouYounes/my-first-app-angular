import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '' , redirectTo: '/add' , pathMatch: 'full'},
    { path: 'add' , component: AddComponent},
    { path: 'list' , component: ListComponent},
    { path: '**' , component: NotfoundComponent},
];
