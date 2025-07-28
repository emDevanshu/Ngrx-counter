import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {Observable} from "rxjs";
import {Post} from "../../model/post.model";
import {getPosts} from "../state/posts.selector";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {deletePost} from "../state/post.actions";

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit{
  constructor(private store: Store<AppState>) {}

  posts$!: Observable<Post[]>;

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }

  onDeletePost(id: string | undefined) {
    if(confirm("Are you sure you want to delete")) {
      this.store.dispatch(deletePost({id}));
    }
  }

}
