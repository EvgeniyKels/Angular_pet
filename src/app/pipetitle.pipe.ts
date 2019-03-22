import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipetitle'
})
export class PipetitlePipe implements PipeTransform {
  private arr = ['of', 'the', 'a'];

  transform(inputString: string, args?: any): string {
    if (!inputString) {
      return;
    }
    return inputString.toLowerCase().split(/[^a-zA-Z]+/)
      .map(o => this.arr.indexOf(o) === -1 ? o.substring(0, 1).toUpperCase() +
      o.substring(1) : o).join(' ');
  }
}
