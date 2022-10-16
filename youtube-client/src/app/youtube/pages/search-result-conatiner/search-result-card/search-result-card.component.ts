import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICustomVideo } from '../../../../redux/app.state';
import { IItem, IStatistics } from '../../../../core/models/models';
import { YoutubeService } from '../../../../core/services/youtube.service';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultCardComponent implements OnInit {
  @Input() video!: IItem;
  @Input() customVideo!: ICustomVideo;
  public title!: string;
  public titleLength!: number;
  public srcImg!: string;
  public publicationAge!: number;
  public stat!: IStatistics;
  constructor(
    public router: Router,
    public youtubeService: YoutubeService,
  ) {}
  ngOnInit(): void {
    if (this.video) {
      this.title = this.video.snippet.title;
      this.titleLength = this.title.length;
      this.stat = this.video.statistics;
      this.srcImg = this.video.snippet.thumbnails.high.url;
      this.publicationAge = Date.now() - Date.parse(this.video.snippet.publishedAt);
    }
  }
  public openDetailsPage(): void {
    this.router.navigate(['/video', this.video.id.videoId]);
    this.youtubeService.currentSnippet = this.video.snippet;
    this.youtubeService.currentStat = this.video.statistics;
  }
}
