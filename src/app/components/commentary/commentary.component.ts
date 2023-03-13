import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Post } from 'src/app/interfaces/post';
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
  movieReviews: Post[] = [];

  constructor(private postService: PostApiService, private storageService: LocalStorageService) { }

  submitCommentAboutMovie(movieId: number | undefined): void {
    if(this.comment == null)
    {
      window.alert("Please, write your thoughts to post a review!");
      return;
    }
    if(typeof(movieId) == "undefined")
      return;

    let post: Post = {
      movieId: movieId,
      comment: this.comment,
    };
    let token = this.storageService.getToken();
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
        this.movieReviews = data;
      },
      error: (err) => console.log(err)
    })
  }
}
