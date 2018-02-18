import { Component,
        OnInit,
        Input,
        ViewEncapsulation,
        OnChanges,
        SimpleChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy,
        ViewChild,
        ElementRef,
        ContentChild,
      } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
      AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input ()
  element: {type: string, name: string, content: string};

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor Called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called!');
    console.log('Text Content paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!');
  }
}
