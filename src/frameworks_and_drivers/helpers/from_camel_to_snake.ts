const fromCamelToSnake = (item: any) => {
    const mapItem: any = { ...item };
    for (const key in mapItem) {
        const newKey = camelToSnake(key);
        mapItem[newKey] = mapItem[key];
        if (key !== newKey) delete mapItem[key];
    }
    return mapItem;
};

type camelToSnakeFn = (string: string) => string;

const camelToSnake: camelToSnakeFn = (string: string) => {
    return string.replace(/([A-Z])/g, '_$1').toLowerCase();
};

export { fromCamelToSnake, camelToSnake };