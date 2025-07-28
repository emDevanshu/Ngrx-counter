import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {getPostById} from "../state/posts.selector";
import {AppState} from "../../state/app.state";
import {Store} from "@ngrx/store";
import {Post} from "../../model/post.model";
import {Subscription} from "rxjs";
import {updatePost} from "../state/post.actions";

@Component({
  selector: 'app-edit-post',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit, OnDestroy{
  post!: Post | undefined;
  postSubscription!: Subscription;
  postForm!: FormGroup;
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.postSubscription = this.route.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('id');
      this.store.select(getPostById, {id}).subscribe(data => {
        this.post = data;
        console.log(this.post);
        this.createForm();
      });
    });
  }

  ngOnDestroy() {
    if(this.postSubscription)
      this.postSubscription.unsubscribe();
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    if (!this.postForm.valid) return;

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post?.id,
      title,
      description
    };

    //dispatch the action
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }

}
