import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { sortType } from '../../models/sort-type';
import { SortService } from '../../services/sort.service';

import { SortBarComponent } from './sort-bar.component';

describe('SortBarComponent', () => {
  let component: SortBarComponent;
  let fixture: ComponentFixture<SortBarComponent>;

  const fakeSortService = {
    currentDateSort: sortType.descending,
    currentViewsSort: sortType.descending,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SortBarComponent],
      providers: [{ provide: SortService, useValue: fakeSortService }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeDateSort should change currentDateSort', () => {
    component.changeDateSort();
    expect(fakeSortService.currentDateSort).toBe(sortType.ascending);
  });

  it('changeViewsSort should change currentViewSort', () => {
    component.changeViewsSort();
    expect(fakeSortService.currentViewsSort).toBe(sortType.ascending);
  });

  it('click on #date-sort-btn should call changeDateSort()', () => {
    const result = spyOn(component, 'changeDateSort');
    const button = fixture.debugElement.query(By.css('#date-sort-btn'));
    button.nativeElement.click();
    expect(result).toHaveBeenCalled();
  });

  it('click on #views-sort-btn should call changeViewsSort()', () => {
    const result = spyOn(component, 'changeViewsSort');
    const button = fixture.debugElement.query(By.css('#views-sort-btn'));
    button.nativeElement.click();
    expect(result).toHaveBeenCalled();
  });
});
