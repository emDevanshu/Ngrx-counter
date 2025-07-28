import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/post.module').then((m) => m.PostModule),
  }
];
