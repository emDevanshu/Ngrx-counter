import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Post} from "../../model/post.model";
import {AppState} from "../../state/app.state";
import {Store} from "@ngrx/store";
import {ADD_POST_ACTION, addPost} from "../state/post.actions";

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit{

  constructor(private store: Store<AppState>) {}

  postForm!: FormGroup;

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
        ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  onAddPost() {
    if(!this.postForm.valid) {
      return;
    }

    const post : Post = {
      title : this.postForm.value.title,
      description: this.postForm.value.description
    };

     this.store.dispatch(addPost({post}));
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid) {
      if(descriptionForm?.errors?.['required']) {
        return 'Description is required';
      }

      if(descriptionForm?.errors?.['minlength']) {
        return 'Description should be minimum 10 characters';
      }
    }
    return null;
  }
}
