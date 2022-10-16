import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  debounceTime, distinctUntilChanged, filter, map, Observable, Subscription, switchMap,
} from 'rxjs';
import { select, Store } from '@ngrx/store';
import { updateApiResponse } from '../../../redux/actions/api-response.action';
import { SortService } from '../../../core/services/sort.service';
import { IItem } from '../../../core/models/models';
import { YoutubeService } from '../../../core/services/youtube.service';
import { IAppState, ICustomVideo } from '../../../redux/app.state';

@Component({
  selector: 'app-search-result-conatiner',
  templateUrl: './search-result-conatiner.component.html',
  styleUrls: ['./search-result-conatiner.component.scss'],
})

export class SearchResultConatinerComponent implements OnInit, OnDestroy {
  public videoList$!:Observable<IItem[]>;
  public videoList!: IItem[];
  public customVideoList!: ICustomVideo[];
  private subscription!: Subscription;
  constructor(
    public youtubeService: YoutubeService,
    public sortService: SortService,
    private store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.subscription = this.youtubeService.searchValue.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      filter((item) => item.length >= 3),
      map(() => this.store.dispatch(updateApiResponse())),
      switchMap(() => this.store),
    ).subscribe((data) => {
      this.videoList = [...data.apiVideos];
      this.customVideoList = [...data.customVideos];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
