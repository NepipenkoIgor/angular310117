import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(input: any[], searchTerm: string): any {
    if (!searchTerm) {
      return input;
    }

    return input
      .filter(user =>
        `${user.firstName}${user.surname}`.toLocaleLowerCase()
          .includes(searchTerm));
  }

}
