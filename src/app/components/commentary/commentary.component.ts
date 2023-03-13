import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { PostInput } from 'src/app/interfaces/post-input';
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

  constructor(private postService: PostApiService, private storageService: LocalStorageService) { }

  submitCommentAboutMovie(movieId: number | undefined) {
    let post: PostInput = {
      movieId: movieId,
      comment: this.comment,
    };
    let token = this.storageService.getToken();
    this.postService.addAvaliationToMovie(post, token).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err)
    });
  }

  loadMovieComments(): void {
    this.loadComments = !this.loadComments;
  }
}
