import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { partidosService } from "../partidos.service";
import { partidos, eventos } from "../partidos.model";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  partidos: partidos;
  id_part: number;

  constructor(
    private activeRouter: ActivatedRoute,
    private partidosService: partidosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("partidoId")) {
        return;
      }
      const partidoId = parseInt(paramMap.get("partidoId"));
      this.partidos = this.partidosService.getPartido(partidoId);
      this.id_part = partidoId;
    });
  }

  //delete game
  deletePartido() {
    this.alertController
      .create({
        header: "Borrar Partido",
        message: "¿Está seguro que desea borrar este partido?",
        buttons: [
          {
            text: "No",
            role: "no",
          },
          {
            text: "Borrar",
            handler: () => {
              this.partidosService.deletePartido(this.partidos.id_part);
              this.router.navigate(["./partidos"]);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

  //add event to the game 
  addEvento(code: number) {
    this.router.navigate(["/partidos/eventos/" + code]);
  }
}
