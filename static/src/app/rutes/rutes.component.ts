import { Component, OnInit } from '@angular/core';
import {ApirutesService} from "../apirutes.service";
import {ruta} from "./ruta";

@Component({
  selector: 'app-rutes',
  templateUrl: './rutes.component.html',
  styleUrls: ['./rutes.component.css']
})
export class RutesComponent implements OnInit {
  private rutas: ruta[];
  constructor(private RutesService : ApirutesService) { }

  getJSON() {
    this.RutesService.getJSON().subscribe(data => {
      this.rutas = data;
    });
  }
  ngOnInit() {
      this.getJSON();
    }
}
