import {Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy} from '@angular/core';
import { itemAnim } from '../../anims/item.anim'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Output() taskClick = new EventEmitter();
  widerPriority = 'in';
  constructor() { }

  ngOnInit() {
  }

  onItemClick() {
    this.taskClick.emit();
  }
  onCheckBoxClick(event) {
    event.stopPropagation();
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.widerPriority = 'out';
  }
  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target) {
    this.widerPriority = 'in';
  }
}
