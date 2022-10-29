export interface Transaccion {
    id: number,
    numeroReferencia: number,
    identificador: String,
    fechaCreacion: Date,
    fechaModificacion: Date,
    estado: String,
    total: number,
    direccionCompra: String
}