import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ICustomVideo } from '../../redux/app.state';
import { addCustomVideo } from '../../redux/actions/custom-video.actions';
import { checkDateValidator } from '../directives/check-date.directive';

@Injectable({
  providedIn: 'root',
})
export class CreateCardService {
  private imgReg = ''; // '(https?://[^ ]*.(?:gif|png|jpg|jpeg))'
  private videoReg = ''; // i haven't implemented it yet
  public card = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.maxLength(255)]),
    img: new FormControl('', [Validators.required, Validators.pattern(this.imgReg)]),
    link: new FormControl('', [Validators.required, Validators.pattern(this.videoReg)]),
    date: new FormControl('', [Validators.required, checkDateValidator()]),
  });
  constructor(
    private store: Store<{customVideos: ICustomVideo[]}>,
  ) { }
  public get title() {
    return this.card.get('title');
  }
  public get description() {
    return this.card.get('description');
  }
  public get img() {
    return this.card.get('img');
  }
  public get link() {
    return this.card.get('link');
  }
  public get date() {
    return this.card.get('date');
  }
  public create(): void {
    this.store.dispatch(addCustomVideo(this.card.value));
  }
}
