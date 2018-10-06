import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRandomUserResult} from "../../../models/random-user.model";

@Component({
  selector: 'echo-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() userData: IRandomUserResult;
  @Output() toggleCollapse: EventEmitter<IRandomUserResult> = new EventEmitter();
  @Output() removeUser: EventEmitter<IRandomUserResult> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.userData.collapsed = !this.userData.collapsed;
    this.toggleCollapse.emit(this.userData);
  }

  remove() {
    this.removeUser.emit(this.userData);
  }

}
