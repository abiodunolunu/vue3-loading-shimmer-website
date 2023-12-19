export function getAllKeys<T extends { [key: string]: string }>(arr: T[]) {
    const keys = new Set<keyof T>();

    arr.forEach((obj) => {
        Object.keys(obj).forEach((key) => keys.add(key));
    });

    return [...keys];
}

export function scrollToElement(element: Element | HTMLElement) {
    element.scrollIntoView({
        block: 'start'
    })
}