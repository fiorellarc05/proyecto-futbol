import { Injectable } from '@angular/core';
import { partidos, eventos } from './partidos.model';

@Injectable({
  providedIn: 'root'
})

export class partidosService {
  //events array
  private eventos: eventos[] = [
    {
      id_part: 1,
      id_evento: 1,
      minuto: 1,
      descrip_evento: "Comenzó el partido",
      equipo: "Ambos"
    },
  ];

  private partidos: partidos[] = [

    //games array
    {
      id_part: 1,
      eq_casa: "Manchester City",
      eq_visita: "Liverpool",
      fecha_part: "13 diciembre 2020",
      marcador_casa: 2,
      marcador_visita: 2,
      eventos: this.eventos
    },
  ];

  constructor() { }

  // get all elements to array
  getAll() {
    return [...this.partidos];
  }
  //get elements for ID
  getPartido(partidoId: number) {
    return {
      ...this.partidos.find(
        partidos => {
          return partidos.id_part === partidoId;
        }
      )
    };
  }

  //delete game
  deletePartido(partidoId: number) {
    this.partidos = this.partidos.filter(
      partidos => {
        return partidos.id_part !== partidoId;
      }
    );
  }

  public ocultar1: boolean = false;
  accion1() {
    this.ocultar1 = !this.ocultar1;
  }

  //end game
  detenerPartido(partidoId: number) {
    return {
      ...this.partidos.find(
        partidos => {
          return partidos.id_part === partidoId;
        }
      )
    };
  }

  //add games to array
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
      eventos: this.eventos
    }
    this.partidos.push(partidos);
  }

  //edit game
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
    this.partidos[index].eventos = this.eventos;

    console.log(this.partidos);
  }
  
  //add events to array
  addEvento(
    id_part: number,
    id_evento: number,
    minuto: number,
    descrip_evento: string,
    equipo: string,
  ) {
    const eventos: eventos = {
      id_part: id_part,
      id_evento: id_evento,
      minuto: minuto,
      descrip_evento: descrip_evento,
      equipo: equipo
    }

    if (eventos.descrip_evento == "Gol") {
      let index = this.partidos.map((x) => x.id_part).indexOf(id_part); 

      if (this.partidos[index].eq_casa == eventos.equipo) {
        this.partidos[index].marcador_casa++;
      } else {
        this.partidos[index].marcador_visita++;
      }
    }
    this.eventos.push(eventos);
  }
}
