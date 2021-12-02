import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ServiciosGenerales } from "../../service/servicios-generales.service";

@Component({
  selector: "app-login-boxed",
  templateUrl: "./login-boxed.component.html",
  styles: [],
})
export class LoginBoxedComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _serviceG: ServiciosGenerales
  ) {}

  form: FormGroup = this.fb.group({
    dni: ["75652678", [Validators.required]],
    password: ["1234578", [Validators.required]],
    /*  password: ['', [Validators.required]], */
  });

  ngOnInit() {}

  IngresarDashboard() {
    this._serviceG
      .loginNormal(this.form.get("dni").value, this.form.get("password").value)
      .subscribe(
        async (userResponse: any) => {
          this.form.reset();

          this.router.navigate([`/Dashboard`]);

          localStorage.setItem("system_token", userResponse["jwt"]);
          localStorage.setItem(
            "nombreCompleto",
            (userResponse.name !== null ? userResponse.name : "") +
              " " +
              (userResponse.lastname !== null ? userResponse.lastname : "")
          );
          localStorage.setItem("fotoUsuario", userResponse.path);
          localStorage.setItem("cumpleaños", userResponse.date);
          localStorage.setItem("sexo", userResponse.sexo);
          localStorage.setItem("rol_id", userResponse.rol_id);
          localStorage.setItem("sub_rol_id", userResponse.sub_rol_id);
        },

        (error) => {
          console.log(error);
        }
      );
  }
}
