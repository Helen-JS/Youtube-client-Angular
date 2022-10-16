import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from '../../core/models/sort-type';
import { IItem } from '../../core/models/models';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  constructor() {}

  transform(value: IItem[], str: SortType): IItem[] {
    if (str === SortType.descending) {
      return value.sort((a, b) => Date.parse(b.snippet.publishedAt)
      - Date.parse(a.snippet.publishedAt));
    } if (str === SortType.ascending) {
      return value.sort((a, b) => Date.parse(a.snippet.publishedAt)
      - Date.parse(b.snippet.publishedAt));
    }
    return value;
  }
}
