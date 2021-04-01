export interface ItemTimeline {
    startDate: Date;
    endDate: Date;
    text: string;
    popupVisible: boolean;
    collapsible: boolean;
    color?: string;
}

export interface DataRadio {
    label: string;
    add: boolean;
}

export interface DataUnidadMedida {
    id: string;
    unidadMedida: string;
}

export interface DataMedicamento {
    id: string;
    medicamento: string;
}

export interface DataMedicamentoList {
    id: string;
    nombre: string;
    cantidad: number;
    unidadMedida: string;
    validacion: boolean;
    observaciones: string;
}

export interface DataMedicamentoAdd {
    id?: string;
    medicamentoId: string;
    medicamento: string;
    cantidad: number;
    unidadMedidaId: string;
    unidadMedida: string;
    observaciones: string;
}