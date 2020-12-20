import { Component, Input, OnInit  } from '@angular/core';
import { partidosService } from './partidos.service';
import { partidos, eventos } from './partidos.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.page.html',
  styleUrls: ['./partidos.page.scss'],
})
export class PartidosPage implements OnInit {
  //@Input() id_part: number;
  partidos: partidos[];
  constructor(private partidosServices: partidosService,
  private router: Router) { }

  ngOnInit() {
    this.partidos = this.partidosServices.getAll();
  }

  ionViewWillEnter() {
    this.partidos = this.partidosServices.getAll();
  }

  //update a game
  update(code: number) {
    this.router.navigate(["/partidos/edit/" + code]);
  }

  //game details
  viewDetails(code: number) {
    this.router.navigate(["/partidos/detail/" + code]);
  }

  public ocultar1: boolean = false;
  accion1(){
  this.ocultar1 = !this.ocultar1;
  }
}
