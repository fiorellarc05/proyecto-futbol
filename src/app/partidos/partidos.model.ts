export interface partidos{
    id_part: number;
    eq_casa: string;
    eq_visita: string;
    fecha_part: string;
    marcador_casa: number;
    marcador_visita: number;
    eventos: eventos[]; 
}

export interface eventos{
    id_part: number;
    id_evento: number;
    minuto: number;
    descrip_evento: string;
    equipo: string;
}
