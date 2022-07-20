import { IOperations, IOptions } from '../interfaces/ioperations';

export abstract class BaseImplementation<TDom, FDom>
    implements IOperations<TDom, FDom>
{
    abstract create(item: TDom): Promise<TDom>;
    abstract update(email: string, item: TDom): Promise<TDom | null>;
    abstract delete(id: number): Promise<number>;
    abstract getAll(filter: FDom, options: IOptions): Promise<TDom[]>;
    abstract getOne(id: number): Promise<TDom | null>;
    abstract countRegisters(filter: FDom): Promise<number>;
}
