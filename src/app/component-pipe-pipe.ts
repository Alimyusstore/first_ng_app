import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'componentPipe'
})
export class ComponentPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
