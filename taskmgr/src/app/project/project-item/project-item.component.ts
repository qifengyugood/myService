import {
  Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener,
  ChangeDetectionStrategy
} from '@angular/core';
import { cardAnim } from '../../anims/card.anim'

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnim],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter();
  @Output() onEdit= new EventEmitter();
  @Output() onDel= new EventEmitter();
  @HostBinding('@card') carState = 'out';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.carState = 'hover';
  }
  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target) {
    this.carState = 'out';
  }

  onInviteClick() {
    this.onInvite.emit();
  }
  onEditClick() {
    this.onEdit.emit();
  }
  onDelClick() {
    this.onDel.emit();
  }
}
