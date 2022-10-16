import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { YoutubeService } from '../../../core/services/youtube.service';

import { DetailedInfoPageComponent } from './detailed-info.component';

describe('DetailedInfoComponent', () => {
  let component: DetailedInfoPageComponent;
  let fixture: ComponentFixture<DetailedInfoPageComponent>;

  const fakeYoutubeClientService = {
    currentStat: {
      commentCount: 'string',
      dislikeCount: 'string',
      favoriteCount: 'string',
      likeCount: 'string',
      viewCount: 'string',
    },
    currentSnippet: {
      categoryId: 'string',
      channelId: 'string',
      channelTitle: 'string',
      defaultAudioLanguage: 'string',
      defaultLanguage: 'string',
      description: 'string',
      liveBroadcastContent: 'string',
      localized: 'ILocalized',
      publishedAt: '1231231312323123',
      tags: ['string[]'],
      thumbnails: { high: { url: 'url' } },
      title: 'string',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedInfoPageComponent],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({}), FormsModule],
      providers: [
        { provide: YoutubeService, useValue: fakeYoutubeClientService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
