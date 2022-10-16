import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../../../../core/services/youtube.service';
import { ICustomVideo } from '../../../../redux/app.state';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent implements OnInit {
  @Input() customVideo!: ICustomVideo;
  public titleCustomVideo!: string;
  public titleCustomVideoLength!: number;
  public srcImgCustomVideo!: string;
  public publicationAgeCustomVideo!: number;
  constructor(
    public router: Router,
    public youtubeService: YoutubeService,
  ) {}
  ngOnInit(): void {
    if (this.customVideo) {
      this.titleCustomVideo = this.customVideo.title;
      this.titleCustomVideoLength = this.customVideo.title.length;
      this.srcImgCustomVideo = this.customVideo.img;
      this.publicationAgeCustomVideo = Date.now() - Date.parse(this.customVideo.date);
    }
  }
  public openDetailsPage(): void {
    this.router.navigate(['/video', this.customVideo.title]);
  }
}
