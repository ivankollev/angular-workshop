import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  users: Array<any> = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', active: true, website: 'hildegard.org' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', active: true, website: 'anastasia.net' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', active: false, website: 'ramiro.info' },
    { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', active: true, website: 'kale.biz' }
  ];
  @Output() showUserDetailsEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  showUserDetails(selectedUser) {
    this.showUserDetailsEvent.emit(selectedUser);
  }
}
