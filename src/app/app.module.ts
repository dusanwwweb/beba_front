import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { HeaderComponent } from './components/header/header.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { NotebookDetailComponent } from './components/notebook-detail/notebook-detail.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildListComponent,
    HeaderComponent,
    NotebookListComponent,
    PostListComponent,
    SectionListComponent,
    NotebookDetailComponent,
    PostModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
