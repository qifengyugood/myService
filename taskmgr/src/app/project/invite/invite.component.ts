import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'xsh'
    },
    {
      id: 2,
      name: 'qfy'
    },
    {
      id: 3,
      name: 'syx'
    },
    {
      id: 4,
      name: 'ls'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}) {
    return user ? user.name : '';
  }

}
