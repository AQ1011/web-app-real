import { Component, ComponentFactoryResolver, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { AdDirective } from './AdDirective.directive';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  current: any;
  title = 'MySite';
  @ViewChild(AdDirective, {static: true}) ad2!: AdDirective;

  constructor(private viewContainerRef: ViewContainerRef,
    public resolver: ComponentFactoryResolver){}

  @HostListener('mouseup', ['$event'])
  onMouseUp() {
    if(this.current)
      console.log('lalaland',this.current);
    this.current = null;
  }

  saveChild(child: any) {
    this.current = child;
  }

  add() {
    const viewContainerRef = this.ad2.viewContainerRef;
    viewContainerRef.createComponent(this.resolver.resolveComponentFactory(ContainerComponent));
  }

  changeDisplay(dad: HTMLElement) {
    if(!dad.classList.contains('d-flex')) {
      dad.classList.add('d-flex');
      return;
    }
    dad.classList.remove('d-flex');
  }
}
