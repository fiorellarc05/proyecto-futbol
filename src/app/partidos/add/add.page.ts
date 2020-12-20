import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { partidosService } from '../partidos.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})


export class AddPage implements OnInit {
  formPartidoAdd: FormGroup;

  constructor(
    private servicePartidos: partidosService,
    private router: Router
  ) { }


  //validate the inputs
  ngOnInit() {
    this.formPartidoAdd = new FormGroup({
      id_part: new FormControl(
        1,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }
      ),
      eq_casa: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(3)]
        }
      ),
      eq_visita: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(3)]
        }
      ),
      fecha_part: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }
      ),
      marcador_casa: new FormControl(
        0,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(1)]
        }
      ),
      marcador_visita: new FormControl(
        0,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }
      ),
      eventos: new FormControl(
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(4)]
        }
      ),
    });
  }
  
  //add game
  addPartido() {
    if (!this.formPartidoAdd.valid) {
      return;
    }
    this.servicePartidos.addPartido(
      this.formPartidoAdd.value.id_part,
      this.formPartidoAdd.value.eq_casa,
      this.formPartidoAdd.value.eq_visita,
      this.formPartidoAdd.value.fecha_part,
      this.formPartidoAdd.value.marcador_casa,
      this.formPartidoAdd.value.marcador_visita,
      this.formPartidoAdd.value.eventos
    );
    this.formPartidoAdd.reset();
    this.router.navigate(['/partidos']);
  }

}
