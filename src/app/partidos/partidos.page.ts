import { Component, Input, OnInit  } from '@angular/core';
import { partidosService } from './partidos.service';
import { partidos } from './partidos.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.page.html',
  styleUrls: ['./partidos.page.scss'],
})
export class PartidosPage implements OnInit {
  @Input() id_part: number;
  partidos: partidos[];
  constructor(private partidosServices: partidosService,
  private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("Se obtuvo la lista");
    this.partidos = this.partidosServices.getAll();
  }

  update(code: number) {
    this.router.navigate(["/partidos/edit/" + code]);
  }
  public ocultar1: boolean = false;
  accion1(){
  this.ocultar1 = !this.ocultar1;
  }
}
