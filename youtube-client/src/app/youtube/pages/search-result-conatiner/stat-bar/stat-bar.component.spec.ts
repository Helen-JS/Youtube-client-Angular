import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { StatBarComponent } from './stat-bar.component';

describe('StatBarComponent', () => {
  let component: StatBarComponent;
  let fixture: ComponentFixture<StatBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatBarComponent],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ngOnInit should init data', () => {
    component.stat = {
      favoriteCount: '100',
      viewCount: '100',
      commentCount: '100',
      dislikeCount: '100',
      likeCount: '100',
    };
    component.ngOnInit();
    expect(component.views).toBe('100');
    expect(component.comments).toBe('100');
    expect(component.likes).toBe('100');
  });
});
