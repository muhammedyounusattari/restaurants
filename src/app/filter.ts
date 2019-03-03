import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    
  
  
  transform(items: any[], filter: Object): any {
    //debugger;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
     debugger;
        return items.filter(item => (item.name.indexOf(filter) !== -1)|| (item.cuisineStyle.indexOf(filter) !== -1));
    }
}