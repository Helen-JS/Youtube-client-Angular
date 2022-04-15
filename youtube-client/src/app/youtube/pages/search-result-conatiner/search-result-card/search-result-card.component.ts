import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from '../../../../core/models/models';
import { YoutubeService } from '../../../../core/services/youtube.service';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  @Input() index!:number;
  @Input() video!:IItem;
  public title!: string;
  public srcImg!: string;
  public publicationAge!: number;
  constructor(
    public router: Router,
    public youtubeService: YoutubeService,
  ) {}
  ngOnInit(): void {
    if (this.youtubeService.searchListWithStat) {
      this.title = this.video.snippet.title;
      this.srcImg = this.video.snippet.thumbnails.high.url;
      this.publicationAge = Date.now() - Date.parse(this.video.snippet.publishedAt);
    }
  }
  public openDetailsPage(id:number): void {
    this.router.navigate(['/video', this.video.id.videoId]);
    this.youtubeService.currentSnippet = this.video.snippet;
    this.youtubeService.currentStat = this.video.statistics;
  }
}
