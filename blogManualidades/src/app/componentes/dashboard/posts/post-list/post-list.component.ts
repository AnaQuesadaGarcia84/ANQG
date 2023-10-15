import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub : Subscription;

  constructor(public PostService: PostService) { }

  ngOnInit() {
    this.posts = this.PostService.getPosts();
    this.postsSub = this.PostService.getUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;})
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
