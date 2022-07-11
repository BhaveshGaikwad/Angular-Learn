import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitlePipe'
})
export class CustomTitlePipePipe implements PipeTransform {

  transform(value: string): any {
    
    if(!value) return null;
    const lower = ['of', 'the'];

    let words = value.split(' ');
    
    for (let index = 0; index < words.length; index++) {
      
      if(index!=0 && lower.includes(words[index].toLowerCase())){
      
        words[index] = words[index].toLowerCase();
      
      }else{
        
        words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1).toLowerCase();
      
      }
    }
    
    return words.join(' ');

  }

}
