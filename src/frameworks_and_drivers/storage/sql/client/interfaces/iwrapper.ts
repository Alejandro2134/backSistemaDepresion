export interface IWrapper<TDom, TDal> {
    fromDomToDal(item: TDom): TDal;
    fromDalToDom(item: TDal): TDom;
}

export interface IFilterWrapper<FDom, FDal> {
    filterDomToDal(item: FDom): FDal;
}