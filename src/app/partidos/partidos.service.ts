import { Injectable } from '@angular/core';
import { partidos, eventos } from './partidos.model';

@Injectable({
  providedIn: 'root'
})

export class partidosService {
  private partidos: partidos[] = [
    {
      id_part: 1,
      eq_casa: "Manchester City",
      eq_visita: "Liverpool",
      fecha_part: "13 diciembre 2020",
      marcador_casa: 2,
      marcador_visita: 2,
      eventos: "5 amarillas"
    },
    {
      id_part: 2,
      eq_casa: "Everton",
      eq_visita: "Manchester United",
      fecha_part: "15 diciembre 2020",
      marcador_casa: 1,
      marcador_visita: 4,
      eventos: "1 expulsado"
    },
  ];

  constructor() { }

  getAll() {
    return [...this.partidos];
  }
  getPartido(partidoId: number) {
    return {
      ...this.partidos.find(
        partidos => {
          return partidos.id_part === partidoId;
        }
      )
    };
  }
  deletePartido(partidoId: number) {
    this.partidos = this.partidos.filter(
      partidos => {
        return partidos.id_part !== partidoId;
      }
    );
  }

  
    public ocultar1: boolean = false;
    accion1(){
    this.ocultar1 = !this.ocultar1;
    }

  detenerPartido(partidoId: number) {
    return {
      ...this.partidos.find(
        partidos => {
          return partidos.id_part === partidoId;
        }
      )
    };
  }


  
  addPartido(
    id_part: number,
    eq_casa: string,
    eq_visita: string,
    fecha_part: string,
    marcador_casa: number,
    marcador_visita: number,
    eventos: string,
  ) {
    const partidos: partidos = {
      id_part: id_part,
      eq_casa: eq_casa,
      eq_visita: eq_visita,
      fecha_part: fecha_part,
      marcador_casa: marcador_casa,
      marcador_visita: marcador_visita,
      eventos: eventos
    }
    this.partidos.push(partidos);
  }
  editPartido(
    id_part: number,
    eq_casa: string,
    eq_visita: string,
    fecha_part: string,
    marcador_casa: number,
    marcador_visita: number,
    eventos: string
  ) {
    let index = this.partidos.map((x) => x.id_part).indexOf(id_part);

    this.partidos[index].id_part = id_part;
    this.partidos[index].eq_casa = eq_casa;
    this.partidos[index].eq_visita = eq_visita;
    this.partidos[index].fecha_part = fecha_part;
    this.partidos[index].marcador_casa = marcador_casa;
    this.partidos[index].marcador_visita = marcador_visita;
    this.partidos[index].eventos = eventos;

    console.log(this.partidos);
  }
}
