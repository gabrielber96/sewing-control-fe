import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ServiciosGenerales } from "src/app/DemoPages/service/servicios-generales.service";
import { environment } from "src/environments/environment";
import { ThemeOptions } from "../../../../../theme-options";

@Component({
  selector: "app-user-box",
  templateUrl: "./user-box.component.html",
})
export class UserBoxComponent implements OnInit {
  constructor(
    public globals: ThemeOptions,
    private toastr: ToastrService,

    private _serviceG: ServiciosGenerales,
    private router: Router
  ) {
    this.obtenerNombreUsuario();
  }

  ngOnInit() {}
  logout() {
    this.toastr.success("Sesión Terminada", "Acción permitida", {
      timeOut: environment.timeOutmessage,
      closeButton: true,
      progressBar: true,
    });
    this._serviceG.signout();
  }

  nombreUsuario = "";
  userMgmt: any = {};
  obtenerNombreUsuario() {
    if (localStorage.getItem("nombreCompleto")) {
      this.nombreUsuario = localStorage.getItem("nombreCompleto");
    } else {
      this.nombreUsuario = this.userMgmt.name + " " + this.userMgmt.lastname;
      localStorage.setItem("nombreCompleto", this.nombreUsuario);
    }
  }
}
