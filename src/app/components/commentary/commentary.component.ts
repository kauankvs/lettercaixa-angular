import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Post } from 'src/app/interfaces/post';
import { PostDisplay } from 'src/app/interfaces/post-display';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PostApiService } from 'src/app/services/post-api.service';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent {
  @Input() movie?: Movie;
  comment?: string;
  loadComments: boolean = false;
  moviePosts: PostDisplay[] = [];

  constructor(private postService: PostApiService, private storageService: LocalStorageService) { }

  submitCommentAboutMovie(movieId: number | undefined): void {
    let token = this.storageService.getToken();
    if(token === null) 
      return window.alert("Please, log in to post your thoughts on movies!");

    if(this.comment == null)
      return window.alert("Please, write your thoughts to post a review!");

    let post: Post = {
      movieId: movieId as number,
      comment: this.comment,
    };
    this.subscribeToAddAvaliation(post, token);
  }

  subscribeToAddAvaliation(post: Post, token: string): void {
    this.postService.addAvaliationToMovie(post, token).subscribe({
      next: (data) => console.log(data),
      error: (err) => { 
        console.log(err) 
        if(err.status === 400)
          window.alert("Please, log in an account to write your thoughts on movies!");
      }
    });
  }

  loadMovieComments(movieId: number | undefined): void {
    this.loadComments = !this.loadComments;
    this.postService.getAllAvaliationsOfMovie(movieId).subscribe({
      next: (data) => {
        console.log(data);
        this.moviePosts = data;
      },
      error: (err) => console.log(err)
    })
  }
}
