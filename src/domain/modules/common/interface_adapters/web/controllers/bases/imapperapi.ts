export interface IMapperAPI<TDom, TApi, TOpts = any> {
    fromApiToDom(item: TApi, opts?: TOpts): TDom;
    fromDomToApi(item: TDom, opts?: TOpts): TApi;
}