import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountApiService } from 'src/app/services/account-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-picture-form',
  templateUrl: './picture-form.component.html',
  styleUrls: ['./picture-form.component.css']
})
export class PictureFormComponent implements OnDestroy {
  imgURL?: string;
  subPic?: Subscription;

  constructor(private service: AccountApiService, private router: Router, private storageService: LocalStorageService) {}

  addPicture(): void {
    let token = this.storageService.getToken();
    if(typeof(this.imgURL) != 'undefined' && token != null)
    {
      this.subPic = this.service.addOrUpdatePicture(this.imgURL, token).subscribe(data => console.log(data));
      location.href = "/my-account"
    }
  }

  ngOnDestroy(): void {
    this.subPic?.unsubscribe();
  }

}
