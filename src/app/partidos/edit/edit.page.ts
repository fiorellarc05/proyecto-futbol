import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { partidosService } from "../partidos.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { partidos, eventos } from '../partidos.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
    partidos: partidos;
    formPartidoEdit: FormGroup;
  
    constructor(
      private activeRouter: ActivatedRoute,
      private servicePartidos: partidosService,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.activeRouter.paramMap.subscribe(paramMap => {
        if (!paramMap.has('partidoId')) {
          return;
        }
        const partidoId = parseInt(paramMap.get('partidoId'));
        this.partidos = this.servicePartidos.getPartido(partidoId);
      });
  
      this.formPartidoEdit = new FormGroup({
        id_part: new FormControl(this.partidos.id_part,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.min(1)],
          }
        ),
        eq_casa: new FormControl(this.partidos.eq_casa,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(3)],
          }
        ),
        eq_visita: new FormControl(this.partidos.eq_visita,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(3)],
          }
        ),
        fecha_part: new FormControl(this.partidos.fecha_part,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.min(1)],
          }
        ),
        marcador_casa: new FormControl(this.partidos.marcador_casa,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(1)],
          }
        ),
        marcador_visita: new FormControl(this.partidos.marcador_visita,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(1)],
          }
        ),
        eventos: new FormControl(this.partidos.eventos,
          {
            updateOn: "blur",
            validators: [Validators.required, Validators.minLength(1)],
          }
        ),
      });
  
      this.formPartidoEdit.value.id_part = this.partidos.id_part;
  
    }
  
    editPartido() {
      if (!this.formPartidoEdit.valid) {
        return;
      }
      this.servicePartidos.editPartido(
        this.formPartidoEdit.value.id_part,
        this.formPartidoEdit.value.eq_casa,
        this.formPartidoEdit.value.eq_visita,
        this.formPartidoEdit.value.fecha_part,
        this.formPartidoEdit.value.marcador_casa,
        this.formPartidoEdit.value.marcador_visita,
        this.formPartidoEdit.value.eventos
      );
      this.formPartidoEdit.reset();
      this.router.navigate(['./partidos']);
    }
  }
