export interface IDepresionTypeDAL {
    id?: number;
    depresion_type: string;
    sintoma_id: number; 
}

export class DepresionTypeDAL implements IDepresionTypeDAL {
    id?: number;
    depresion_type: string;
    sintoma_id: number;

    constructor(item: IDepresionTypeDAL) {
        this.depresion_type = item.depresion_type;
        this.sintoma_id = item.sintoma_id;
    }
}