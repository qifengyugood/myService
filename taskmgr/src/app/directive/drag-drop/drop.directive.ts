import {Directive, ElementRef, HostListener, Renderer2, Input, Output, EventEmitter} from '@angular/core';
import {DragData, DragDropService} from "./drag-drop.service";

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {

  @Output() dropped = new EventEmitter<DragData>();
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private data$;

  constructor(private el: ElementRef, private rd: Renderer2, private service: DragDropService) {
    this.data$ = this.service.getDragData().take(1);
  }
  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if(this.el.nativeElement === e.target) {
      this.data$.subscribe(dragData => {
        if(this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      })
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if(this.el.nativeElement === e.target) {
      this.data$.subscribe(dragData => {
        if(this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(e,'dataTransfer.effectAllowed','all');
          this.rd.setProperty(e,'dataTransfer.dropEffect','move');
        }else {
          this.rd.setProperty(e,'dataTransfer.effectAllowed','none');
          this.rd.setProperty(e,'dataTransfer.dropEffect','none');
        }
      })
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if(this.el.nativeElement === e.target) {
      this.data$.subscribe(dragDate => {
        if(this.dropTags.indexOf(dragDate.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      })
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if(this.el.nativeElement === e.target) {
      this.data$.subscribe(dragDate => {
        if(this.dropTags.indexOf(dragDate.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragDate);
          this.service.clearDragData();
        }
      })
    }
  }
}
