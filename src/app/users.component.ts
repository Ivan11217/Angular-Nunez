import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <h1>Users</h1>
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="['/users', user.id]">{{ user.name }}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class UsersComponent {
  users = [
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
    // more users
  ];
}
