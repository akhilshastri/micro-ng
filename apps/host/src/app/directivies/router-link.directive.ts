import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import {HostRouterService} from "../services/host-router.service";

@Directive({
  selector: 'a[href]'
})
export class RouterLinkDirective implements  OnChanges{

  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';

  @Input() href: string;

  constructor(private el: ElementRef,
              private routerService: HostRouterService) {

  }

  @HostListener('click', ['$event'])clickEvent(event){
    event.preventDefault();
    event.stopPropagation();
    this.routerService.navigate(this.href);
    console.log('Click from Host Element!');
  }


  ngOnChanges() {
    this.hrefAttr = this.href;

    if (this.isLinkExternal()) {
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    }
  }

  private isLinkExternal() {
    return !this.href.includes(location.hostname);
  }

  // ngOnInit(): void {
  //   //debugger;
  //   console.log(this.href);
  //   this.routerService.add(this.href);
  // }

}
