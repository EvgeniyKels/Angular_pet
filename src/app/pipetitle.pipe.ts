import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipetitle'
})
export class PipetitlePipe implements PipeTransform {
  private arr = ['of', 'the', 'a'];
  private strArr = [];
  private str;

  // pipe title - все слова кроме [of, the, a] преобразует в первую загланую
  transform(inputString: string, args?: any): string {
    if (inputString !== '') {
      this.strArr.push(inputString);
      return;
    }
    this.str = this.strArr.join();
    if (this.arr.includes(this.str)) {
      this.str.charAt(0).toUpperCase();
    }
    this.strArr = [];
    return this.str;
  }
}
