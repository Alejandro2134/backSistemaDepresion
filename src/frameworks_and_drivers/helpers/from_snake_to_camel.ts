

const fromSnakeToCamel = (item: any) => {
    const mapItem: any = { ...item };
    for (const key in mapItem) {
        const newKey = snakeToCamel(key);
        mapItem[newKey] = mapItem[key];
        if (key !== newKey) delete mapItem[key];
    }
    return mapItem;
};

const snakeToCamel = (string: string) => {
    return string.replace(/([-_][a-z])/g, (group: string) =>
        group.toUpperCase().replace('-', '').replace('_', '')
    );
};

export { fromSnakeToCamel, snakeToCamel };