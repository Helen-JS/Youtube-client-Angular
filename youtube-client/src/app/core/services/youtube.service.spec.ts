import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { AuthService } from './auth.service';
import { YoutubeService } from './youtube.service';
import {
  IItem, IResponse, ISnippet, IStatistics,
} from '../models/models';
import { response } from '../models/exampleResponse';

describe('YoutubeService', () => {
  let service: YoutubeService;
  const fakeResponse: IResponse = response;
  const fakeAuthService = {
    isLoggedIn: new BehaviorSubject<boolean>(false),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      providers: [{ provide: AuthService, useValue: fakeAuthService }],
    });
    service = TestBed.inject(YoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getVideos should return EMPTY if isLoggedIn = false', () => {
    fakeAuthService.isLoggedIn.next(false);
    expect(service.getVideos('string')).toEqual(EMPTY);
  });
});
