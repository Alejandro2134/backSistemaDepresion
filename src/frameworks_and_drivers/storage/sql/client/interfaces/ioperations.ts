export interface IOperations<T, FDom> {
    //Writing
    create(item: T): Promise<T>;
    update(id: number, item: T): Promise<T | null>;
    delete(id: number): Promise<number>;
    //Reading
    getAll(filter: FDom, options?: IOptions): Promise<T[]>;
    getOne(id: number): Promise<T | null>;
    countRegisters(filter: FDom): Promise<number>;
}

export interface IOptions {
    skip?: number;
    limit?: number;
    sort?: any;
}