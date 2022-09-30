import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.userService.getUserByUserId(5).subscribe(user => {
          this.user = user
        }
    );
  }

  save() {
    this.userService.updateUser(this.user).subscribe(
      data => this.router.navigate(['/home'])
    );
  }
}
