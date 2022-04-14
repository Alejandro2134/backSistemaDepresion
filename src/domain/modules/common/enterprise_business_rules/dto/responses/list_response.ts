class ListResponse<T = any> {
    items: T[];
    total: number;

    constructor(items: T[], total: number) {
        this.items = items;
        this.total = total;
    }
}

export { ListResponse };
