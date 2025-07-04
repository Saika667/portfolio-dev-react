export const getRandomString = (strings: string[]): string => {
    return strings[Math.floor(Math.random() * strings.length)];
}