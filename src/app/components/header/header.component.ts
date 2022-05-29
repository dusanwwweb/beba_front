import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { faSignOutAlt as farSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Font Awesome Icon
  farSignOutAlt = farSignOutAlt;

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }
}
