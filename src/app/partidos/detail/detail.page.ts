import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { partidosService } from '../partidos.service';
import { partidos } from '../partidos.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  partidos: partidos;
  constructor(
    private activeRouter: ActivatedRoute,
    private partidosService: partidosService,
    private router: Router,
    private alertController: AlertController
  ) { }
  
  ngOnInit() {
    this.activeRouter.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('partidoId')){
          return;
        }
        const partidoId =  parseInt( paramMap.get('partidoId'));
        this.partidos = this.partidosService.getPartido(partidoId);
      }
    );
  }

  deletePartido(){
    this.alertController.create({
      header: "Borrar Partido",
      message: "¿Está seguro que desea borrar este partido?",
      buttons:[
        {
          text:"No",
          role: 'no'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.partidosService.deletePartido(this.partidos.id_part);
            this.router.navigate(['./partidos']);
          }
        } 
      ]
    })
    .then(
      alertEl => {
        alertEl.present();
      }
    );
    
  }

  detenerPartido(){
    this.alertController.create({
      header: "Detener partido",
      message: "¿Está seguro que desea detener el partido?",
      buttons:[
        {
          text:"No",
          role: 'no'
        },
        {
          text: 'Detener',
          handler: () => {
            this.partidosService.detenerPartido(this.partidos.id_part);
            this.router.navigate(['./partidos']);
          }
        } 
      ]
    })
    .then(
      alertEl => {
        alertEl.present();
      }
    );
    
  }

}
