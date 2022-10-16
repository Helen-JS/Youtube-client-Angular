import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { IItem, ISnippet, IStatistics } from '../models/models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public searchValue = new Subject<string>();
  public searchKeyWord!: string;
  public currentSnippet!: ISnippet;
  public currentStat!: IStatistics;
  constructor(
    public httpClient: HttpClient,
  ) {}
}
