import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { partidosService } from "../partidos.service";
import { partidos } from "../partidos.model";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.page.html",
  styleUrls: ["./eventos.page.scss"],
})
export class EventosPage implements OnInit {
  formEventoAdd: FormGroup;
  id_part: number;
  partidos: partidos;
  partidosService: any;

  constructor(
    private activeRouter: ActivatedRoute,
    private servicePartidos: partidosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formEventoAdd = new FormGroup({
      id_evento: new FormControl(1, {
        updateOn: "blur",
        validators: [Validators.required, Validators.min(1)],
      }),
      minuto: new FormControl(1, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(3)],
      }),
      descrip_evento: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(3)],
      }),
      equipo: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });

    this.activeRouter.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("partidoId")) {
        return;
      }
      const partidoId = parseInt(paramMap.get("partidoId"));
      this.partidos = this.partidosService.getPartido(partidoId);
      this.id_part = partidoId;
    });
  }

  addEvento() {
    if (!this.formEventoAdd.valid) {
      return;
    }
    this.servicePartidos.addEvento(
      this.formEventoAdd.value.id_part = this.id_part,
      this.formEventoAdd.value.id_evento,
      this.formEventoAdd.value.minuto,
      this.formEventoAdd.value.descrip_evento,
      this.formEventoAdd.value.equipo
    );
    this.formEventoAdd.reset();
    this.router.navigate(["/partidos"]);
  }
}
