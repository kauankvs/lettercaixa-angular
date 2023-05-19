import { Component } from '@angular/core';
import { AccountApiService } from 'src/app/services/account-api.service';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})
export class PictureFormComponent {
  imgURL?: string;

  constructor(private service: AccountApiService) {}

  addPicture(): void {
    if(typeof(this.imgURL) != 'undefined')
    {
    }
  }
}
