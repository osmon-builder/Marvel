import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const heroes of value) {
      if (heroes.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(heroes);
      };
    };
    return resultPosts;
  }
  }


