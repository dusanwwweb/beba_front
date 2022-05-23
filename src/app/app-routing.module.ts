import { NotebookDetailComponent } from './components/notebook-detail/notebook-detail.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionListComponent } from './components/section-list/section-list.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';
import { ChildDetailComponent } from './components/child-detail/child-detail.component';
import { ChildModalComponent } from './components/child-modal/child-modal.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [

  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'logout', 
    component: LogoutComponent,
    canActivate:[AuthGaurdService] 
  },
  { 
    path:'', 
    // redirectTo: 'section',
    component: SectionListComponent,
    pathMatch: 'full',
    canActivate:[AuthGaurdService]
  },
  { 
    path:'section', 
    component: SectionListComponent,
    canActivate:[AuthGaurdService]
  },
  { 
    path:'section/:id', 
    component: SectionDetailComponent,
    canActivate:[AuthGaurdService]
  },
  { 
    path:'children', 
    component: ChildListComponent,
    canActivate:[AuthGaurdService]
  },
  { 
    path:'children/:id', 
    component: ChildDetailComponent,
    canActivate:[AuthGaurdService]
  },
  { 
    path:'children/add/:id', 
    component: ChildModalComponent,
    canActivate:[AuthGaurdService]
  },
  { 
    path:'notebook', 
    component: NotebookListComponent,
    canActivate:[AuthGaurdService]
  },
  { 
    path:'notebook/:id', 
    component: NotebookDetailComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: 'notebook/:id/post', 
    component: CreatePostComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: 'post/:id', 
    component: UpdatePostComponent,
    canActivate:[AuthGaurdService]
  },
  { 
    path:'**', 
    // redirectTo: 'section',
    component: SectionListComponent,
    pathMatch: 'full',
    canActivate:[AuthGaurdService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
