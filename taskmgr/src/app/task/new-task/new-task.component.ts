import {Component, OnInit, Inject, ChangeDetectionStrategy} from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material'; //回传数据

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent implements OnInit {

  title = ""
  priorities = [
    {
      label: '紧急',
      value: '1'
    },
    {
      label: '重要',
      value: '2'
    },
    {
      label: '普通',
      value: '3'
    }
  ]

  constructor(@Inject(MD_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
  }

}
