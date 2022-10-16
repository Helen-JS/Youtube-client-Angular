import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { IItem, IResponse, IStatistics } from '../../core/models/models';
import { YoutubeService } from '../../core/services/youtube.service';

@Injectable()
export class YoutubeEffects {
  public searchList!: IItem[];
  private statisticsArr!: IStatistics[];
  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeService,
    private httpClient: HttpClient,
  ) {}

  loadApiVideos$ = createEffect(() => this.actions$.pipe(
    ofType('[UpdateApiResponse Component] Update'),
    mergeMap(() => this.httpClient.get<IResponse>(
      `search?&type=video&maxResults=15&q=${this.youtubeService.searchKeyWord}&part=snippet`,
    )),
    map((videoResponse: IResponse) => {
      const idList: string[] = videoResponse.items
        .map((item: IItem) => item.id.videoId);
      this.searchList = videoResponse.items;
      return idList;
    }),
    mergeMap((idList: string[]) => this.httpClient.get(`videos?part=statistics&&id=${idList}`)),
    map((stat: any) => {
      const statistics: IStatistics[] = stat.items.map((items: IItem) => items.statistics);
      this.statisticsArr = statistics;
      statistics.forEach((item, index) => {
        this.searchList[index].statistics = item;
      });
      return this.searchList;
    }),
    map((videos: IItem[]) => ({ type: '[UpdateApiVideo Component] Update', newApiVideoList: videos })),
  ));
}
