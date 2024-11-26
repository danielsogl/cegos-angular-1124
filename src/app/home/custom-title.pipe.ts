import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle',
})
export class CustomTitlePipe implements PipeTransform {
  transform(
    value: string,
    // format will be optional with default value of uppercase
    format: 'uppercase' | 'lowercase' = 'uppercase'
  ): string {
    console.log('CustomTitlePipe transform called');

    return format === 'uppercase' ? value.toUpperCase() : value.toLowerCase();
  }
}
