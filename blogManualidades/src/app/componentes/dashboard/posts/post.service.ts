import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})


export class PostService{
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    getUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title: string, content: string, dateTime: any){
        const post : Post = {title: title, content: content, dateTime: new Date()}
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }

    getPosts(){
        return [...this.posts];
    }
}