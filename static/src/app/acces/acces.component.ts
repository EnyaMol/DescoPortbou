import { Component, OnInit } from '@angular/core';
import {DadesusuariService} from '../dadesusuari.service';

@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css'],
  providers : [DadesusuariService]
})
export class AccesComponent implements OnInit {
  register;

  constructor(private dadesusuariService: DadesusuariService) { }

  ngOnInit() {
    this.register = {
        username: '',
        password: '',
        email: ''
    };
  }
  registra() {
    this.dadesusuariService.registra(this.register).subscribe(
      response => {
        alert('Usuari ' + this.register.username + ' creat.');
      },
      error => console.log('error', error)
    );
  }
}
