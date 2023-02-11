import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML'
})
export class SafeHTMLPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  transform(value: string):SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
