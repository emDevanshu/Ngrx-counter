import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsState} from "./post.state";
import {state} from "@angular/animations";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
})

export const getPostById = createSelector(getPostsState, (state: PostsState, props: any) => {
  return state.posts.find((post) => post.id === props.id);
})
