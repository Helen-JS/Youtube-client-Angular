import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { response } from 'src/app/core/models/exampleResponse';

import { SearchResultCardComponent } from './search-result-card.component';

describe('SearchResultCardComponent', () => {
  let component: SearchResultCardComponent;
  let fixture: ComponentFixture<SearchResultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultCardComponent],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({}), FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.video = response.items[0];
    component.ngOnInit();
    expect(component.title).toBe('Angular for Beginners');
    expect(component.titleLength).toBe(21);
    expect(component.stat).toEqual(response.items[0].statistics);
    expect(component.srcImg).toBe(response.items[0].snippet.thumbnails.high.url);
  });
});
