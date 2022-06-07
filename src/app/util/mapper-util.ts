export const mapper = <T, K>(object: K): T => {
    const obj = {} as T;

    Object.keys(object).map(key => {
        if (instanceOf<T>(object, key)) {
            // @ts-ignore
            obj[key] = object[key];
        }
    });
    return obj;
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function instanceOf<T>(object: any, key: string): object is T {
    return key in object;
};
