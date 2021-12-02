import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ThemeOptions } from "../../../../../theme-options";

@Component({
  selector: "app-user-box",
  templateUrl: "./user-box.component.html",
})
export class UserBoxComponent implements OnInit {
  constructor(public globals: ThemeOptions, private router: Router) {}

  ngOnInit() {}
  logout() {
    this.router.navigate([`/pages/login-boxed`]);
  }
}
