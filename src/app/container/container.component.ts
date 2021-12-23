import { Component, ComponentFactoryResolver, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { AdDirective } from '../AdDirective.directive';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  @Input()
  content!: any;
  style: string;

  @Output() newItemEvent = new EventEmitter<string>();

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    this.newItemEvent.emit(this.content);
  }

  constructor(private viewContainerRef: ViewContainerRef,
    public resolver: ComponentFactoryResolver) {
      this.style = "";
   }

  ngOnInit(): void {
  }  

  add() {
    this.adHost.viewContainerRef.createComponent(this.resolver.resolveComponentFactory(ContainerComponent));
  }

  changeStyle(dad: HTMLElement) {
    dad.className=this.style;
  }

}
