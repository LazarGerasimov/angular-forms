import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.getUsers().subscribe({
        next: (users) => console.log(users),
        error: (err) => console.error(err)
      })
  }
  title = 'angular-forms';
}
