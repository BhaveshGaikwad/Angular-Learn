import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitlePipe'
})
export class CustomTitlePipePipe implements PipeTransform {

  transform(value: string): any {
    
    if(!value) return null;

    let words = value.split(' ');
    
    for (let index = 0; index < words.length; index++) {
      
      if(index!=0 && this.isLower(words[index]))
        words[index] = words[index].toLowerCase();
      else  
        words[index] = this.toTitleCase(words[index]);
    
    }
    
    return words.join(' ');

  }

  private isLower(word :string):boolean{
    const lower = ['of', 'the'];
    return lower.includes(word.toLowerCase());
  }

  private toTitleCase(word:string ):string{
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }

}
