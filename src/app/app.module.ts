import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {  LOCALE_ID, NgModule } from '@angular/core';
import * as fr from '@angular/common/locales/fr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { NotebookDetailComponent } from './components/notebook-detail/notebook-detail.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';
import { ChildDetailComponent } from './components/child-detail/child-detail.component';
import { ChildModalComponent } from './components/child-modal/child-modal.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildListComponent,
    HeaderComponent,
    NotebookListComponent,
    SectionListComponent,
    NotebookDetailComponent,
    PostModalComponent,
    SectionDetailComponent,
    ChildDetailComponent,
    ChildModalComponent,
    UpdatePostComponent,
    CreatePostComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
