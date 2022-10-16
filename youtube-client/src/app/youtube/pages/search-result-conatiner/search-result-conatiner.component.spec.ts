import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';
import { SortByViewsPipe } from '../../pipes/sort-by-views.pipe';
import { SortByWordsPipe } from '../../pipes/sort-by-words.pipe';

import { SearchResultConatinerComponent } from './search-result-conatiner.component';

describe('SearchResultConatinerComponent', () => {
  let component: SearchResultConatinerComponent;
  let fixture: ComponentFixture<SearchResultConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchResultConatinerComponent, SortByDatePipe, SortByViewsPipe, SortByWordsPipe,
      ],
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
