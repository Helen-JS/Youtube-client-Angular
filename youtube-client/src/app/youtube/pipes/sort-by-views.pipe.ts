import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from '../../core/models/sort-type';
import { IItem } from '../../core/models/models';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {
  constructor() {}

  transform(value: IItem[], str: SortType): IItem[] {
    if (str === SortType.descending) {
      return value.sort((a, b) => Number(b.statistics.viewCount)
      - Number(a.statistics.viewCount));
    } if (str === SortType.ascending) {
      return value.sort((a, b) => Number(a.statistics.viewCount)
      - Number(b.statistics.viewCount));
    }
    return value;
  }
}
