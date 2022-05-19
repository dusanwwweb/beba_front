import { NotebookDetailComponent } from './components/notebook-detail/notebook-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionListComponent } from './components/section-list/section-list.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';
import { ChildDetailComponent } from './components/child-detail/child-detail.component';
import { ChildModalComponent } from './components/child-modal/child-modal.component';

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
    path:'children/:id', 
    component: ChildDetailComponent,
  },
  { 
    path:'children/add/:id', 
    component: ChildModalComponent,
  },
  { 
    path:'notebook', 
    component: NotebookListComponent
  },
  { 
    path:'notebook/:id', 
    component: NotebookDetailComponent
  },
  { 
    path:'post/:id', 
    component: PostListComponent
  },
  { 
    path:'post', 
    component: PostListComponent
  },
  { 
    path:'section', 
    component: SectionListComponent
  },
  { 
    path:'section/:id', 
    component: SectionDetailComponent
  },
  { 
    path:'**', 
    redirectTo: 'section',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
