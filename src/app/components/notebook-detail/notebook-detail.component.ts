import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notebook } from 'src/app/models/notebook.model';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { Location } from '@angular/common'
import { PostService } from 'src/app/service/post.service';
import { ActivityType } from 'src/app/enums/activityType.enum';
@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.css']
})
export class NotebookDetailComponent implements OnInit {

  posts!: Post[];
  notebook!: Notebook;
  isShow: boolean =  false; //PROBLEME !
  
  //Enum 
  // activityList = Object.values(ActivityType);
  // activityType: Array<string> = Object.values(ActivityType).filter(value => isNaN(+value));
  
  constructor(
    private notebookService: NotebookService, 
    private postService: PostService,
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((() => {
      this.getNotebookDetails();
    }))

    // console.log(this.activityList);
  }

  getNotebookDetails() {
    const notebookId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.notebookService.getNotebookById(notebookId).subscribe( 
      response => {this.notebook = response} 
    )

    this.notebookService.getPostsById(notebookId).subscribe( 
      response => {this.posts = response}
    )
  }

  deletePost(postId:number){
    this.postService.deletePost(postId).subscribe( response => {
      this.posts = this.posts.filter(item => item.id !== postId);
      // alert('Note supprimée avec success');
    })
  }

  updatePost(id: number){
    this.router.navigate(['post', id]);
    this.isShow = !this.isShow;
  }

  back(): void {
    this.location.back()
  }
  
  isActivity(activityType: any){
      switch (activityType) {
        case "AWAKE":
          return "var(--awake-bg-color)";
        case "REST":
          return "var(--rest-bg-color)";
        case "EAT":
          return "var(--eat-bg-color)";
        case "STOOL":
          return "var(--stool-bg-color)";
        case "CRY":
          return "var(--cry-bg-color)";
        case "CHANGE":
          return "var(--change-bg-color)";
        default: return "white"
          break;
      }
  }
}

