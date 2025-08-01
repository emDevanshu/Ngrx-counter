import {createReducer, on} from "@ngrx/store";
import {initialState} from "./post.state";
import {addPost, deletePost, updatePost} from "./post.actions";

const _postsReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    let post = {...action.post};
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(deletePost, (state, action) => {
    const updatedPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    })
    return {
      ...state,
      posts: updatedPosts
    }
  })
  );


export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
