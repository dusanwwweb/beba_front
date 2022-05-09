import { NotebookComponent } from './components/notebook/notebook.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'notebook/:id', component: NotebookComponent},
  { path:'', component: ChildListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
