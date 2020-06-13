import {Component, OnInit} from '@angular/core';
import {hostAppPropsSubject} from "../../../host-app/host-app-props";

// import {Observable} from "rxjs";

@Component({
  selector: 'micro-ng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList: [];

  constructor() {
  }

  ngOnInit(): void {
    // this.menuList$ =  hostAppPropsSubject;
    hostAppPropsSubject.subscribe((val) =>{
      console.log((val as any).menus);
      console.log((val ));
      this.menuList = (val as any).menus;
    });
  }

}
