import { PostListComponent } from './components/post-list/post-list.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionListComponent } from './components/section-list/section-list.component';

const routes: Routes = [
  { 
    path:'', 
    component: ChildListComponent,
    pathMatch: 'full'
  },
  { 
    path:'children', 
    component: ChildListComponent,
  },
  { 
    path:'notebook', 
    component: NotebookComponent
  },
  { 
    path:'notebook/:id', 
    component: NotebookComponent
  },
  { 
    path:'post', 
    component: PostListComponent
  },
  { 
    path:'section', 
    component: SectionListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
