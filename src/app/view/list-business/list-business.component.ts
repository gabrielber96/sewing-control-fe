import { Component, OnInit } from "@angular/core";

interface Country {
  name: string;
  flag: string;
  area: string;
  employees: number;
  status: string;
}

const COUNTRIES: Country[] = [
  {
    name: "EMPRESA 1",
    flag: "assets/images/avatars/9.jpg",
    area: "Textil",
    employees: 146989754,
    status: "Activo",
  },
  {
    name: "EMPRESA 2",
    flag: "assets/images/avatars/9.jpg",
    area: "Reciclaje",
    employees: 36624199,
    status: "Inactivo",
  },
  {
    name: "EMPRESA 3",
    flag: "assets/images/avatars/9.jpg",
    area: "Banca",
    employees: 324459463,
    status: "Activo",
  },
  {
    name: "EMPRESA 4",
    flag: "assets/images/avatars/9.jpg",
    area: "Alimentos",
    employees: 1409517397,
    status: "Activo",
  },
];

@Component({
  selector: "app-list-business",
  templateUrl: "./list-business.component.html",
  styleUrls: ["./list-business.component.sass"],
})
export class ListBusinessComponent implements OnInit {
  heading = "Lista de empresas";
  subheading = "Tables are the backbone of almost all web applications.";
  icon = "pe-7s-drawer icon-gradient bg-happy-itmeo";

  constructor() {}
  countries = COUNTRIES;

  ngOnInit() {}
}
